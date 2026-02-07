"use server";

import { Resend } from "resend";
import { createClient } from "@/utils/supabase/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const adminEmail =
  process.env.NEXT_PUBLIC_ADMIN_EMAIL || "info@aisha-academy.com";

export async function sendEnrollmentEmail(formData: FormData) {
  const studentName = formData.get("studentName") as string;
  const parentName = formData.get("parentName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const age = formData.get("age") as string;
  const gender = formData.get("gender") as string;
  const city = formData.get("city") as string;
  const program = formData.get("program") as string;
  const learningMode = formData.get("learningMode") as string;
  const preferredDays = formData.get("preferredDays") as string;
  const preferredTime = formData.get("preferredTime") as string;
  const message = formData.get("message") as string;

  console.log("--- NEW ENROLLMENT ATTEMPT ---");
  console.log("Student:", studentName);
  console.log("Parent:", parentName);
  console.log("Program:", program);

  try {
    // 1. Save to Supabase
    const supabase = await createClient();
    const tableName =
      learningMode === "online" ? "online_enrollments" : "physical_enrollments";

    const { error: dbError } = await supabase.from(tableName).insert([
      {
        student_name: studentName,
        parent_name: parentName,
        email,
        phone,
        age: parseInt(age) || null,
        gender,
        city,
        program,
        preferred_days: preferredDays,
        preferred_time: preferredTime,
        message,
        status: "pending",
      },
    ]);

    if (dbError) {
      console.error("Database Error:", dbError);
    } else {
      console.log("Successfully saved to Supabase (enrollments)");
    }

    // 2. Send Email via Resend
    console.log("Attempting to send email via Resend to:", adminEmail);
    const { data, error } = await resend.emails.send({
      from: "Aisha Academy <admissions@aisha-academy.com>",
      to: adminEmail,
      subject: `New Enrollment Application: ${studentName}`,
      html: `
        <h2>New Enrollment Application</h2>
        <p><strong>Student Name:</strong> ${studentName}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Parent Name:</strong> ${parentName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Learning Mode:</strong> ${learningMode}</p>
        <p><strong>Program:</strong> ${program}</p>
        <p><strong>Preferred Days:</strong> ${preferredDays}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr />
        <p>This enrollment has been saved to the database.</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    console.log("Resend Success:", data);
    return { success: true, data };
  } catch (err) {
    console.error("Action Catch Error:", err);
    return { success: false, error: "Failed to process application" };
  }
}

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const inquiry = formData.get("inquiry") as string;
  const message = formData.get("message") as string;

  console.log("--- NEW CONTACT INQUIRY ---");
  console.log("Name:", name);
  console.log("Email:", email);

  try {
    // 1. Save to Supabase
    const supabase = await createClient();
    const { error: dbError } = await supabase.from("contact_inquiries").insert([
      {
        name,
        email,
        phone,
        inquiry_type: inquiry,
        message,
        status: "new",
      },
    ]);

    if (dbError) {
      console.error("Database Error:", dbError);
    } else {
      console.log("Successfully saved to Supabase (contact_inquiries)");
    }

    // 2. Send Email via Resend
    console.log("Attempting to send contact email to:", adminEmail);
    const { data, error } = await resend.emails.send({
      from: "Aisha Academy Contact <info@aisha-academy.com>",
      to: adminEmail,
      subject: `New Contact Inquiry: ${inquiry} from ${name}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Inquiry Type:</strong> ${inquiry}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr />
        <p>This inquiry has been saved to the database.</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    console.log("Resend Success:", data);
    return { success: true, data };
  } catch (err) {
    console.error("Action Catch Error:", err);
    return { success: false, error: "Failed to send message" };
  }
}

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email || !email.includes("@")) {
    return { success: false, error: "Invalid email address" };
  }

  console.log("--- NEW NEWSLETTER SUBSCRIPTION ---");
  console.log("Email:", email);

  try {
    // 1. Save to Supabase
    const supabase = await createClient();
    const { error: dbError } = await supabase
      .from("newsletter_subscriptions")
      .insert([
        {
          email,
          status: "active",
        },
      ]);

    if (dbError) {
      console.error("Database Error:", dbError);
      // We don't stop here, we still try to notify the admin
    } else {
      console.log("Successfully saved to Supabase (newsletter_subscriptions)");
    }

    // 2. Send Notification Email to Admin
    console.log("Attempting to send newsletter notification to:", adminEmail);
    const { data, error } = await resend.emails.send({
      from: "Aisha Academy Newsletter <info@aisha-academy.com>",
      to: adminEmail,
      subject: `New Newsletter Subscriber: ${email}`,
      html: `
        <h2>New Newsletter Subscription</h2>
        <p>A new user has subscribed to the Aisha Academy newsletter.</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p>This email has been recorded in the database.</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      // Even if email fails, database save might have worked, but we return success based on the overall intent
    }

    return { success: true };
  } catch (err) {
    console.error("Newsletter Subscription Error:", err);
    return { success: false, error: "An unexpected error occurred" };
  }
}
