"use server";

import { Resend } from "resend";
import { createClient } from "@/utils/supabase/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const adminEmail =
  process.env.NEXT_PUBLIC_ADMIN_EMAIL || "info@aisha-academy.com";

export async function sendEnrollmentEmail(formData: FormData) {
  const studentName = formData.get("studentName") as string;
  const age = formData.get("age") as string;
  const gender = formData.get("gender") as string;
  const parentName = formData.get("parentName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const city = formData.get("city") as string;
  const course = formData.get("course") as string;
  const preferredDays = formData.get("preferredDays") as string;
  const preferredTime = formData.get("preferredTime") as string;
  const message = formData.get("message") as string;
  const learningMode = formData.get("learningMode") as string;

  try {
    // 1. Save to Supabase
    const supabase = await createClient();
    const { error: dbError } = await supabase.from("enrollments").insert([
      {
        student_name: studentName,
        age: parseInt(age),
        gender,
        parent_name: parentName,
        email,
        phone,
        city,
        course,
        preferred_days: preferredDays,
        preferred_time: preferredTime,
        message,
        learning_mode: learningMode,
      },
    ]);

    if (dbError) {
      console.error("Database Error:", dbError);
    }

    // 2. Send Email
    console.log("Attempting to send email via Resend to:", adminEmail);
    const { data, error } = await resend.emails.send({
      from: "Aisha Academy <info@aisha-academy.com>",
      to: [adminEmail],
      replyTo: email,
      subject: `New Enrollment Application: ${studentName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #2D3748; border-bottom: 2px solid #E2E8F0; padding-bottom: 10px;">New Enrollment Received</h2>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #4A5568;">Student Information</h3>
            <p><strong>Name:</strong> ${studentName}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Learning Mode:</strong> ${learningMode}</p>
          </div>

          <div style="margin-top: 20px;">
            <h3 style="color: #4A5568;">Parent Details</h3>
            <p><strong>Name:</strong> ${parentName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>City:</strong> ${city}</p>
          </div>

          <div style="margin-top: 20px;">
            <h3 style="color: #4A5568;">Course Preferences</h3>
            <p><strong>Program:</strong> ${course}</p>
            <p><strong>Preferred Days:</strong> ${preferredDays}</p>
            <p><strong>Preferred Time:</strong> ${preferredTime}</p>
          </div>

          <div style="margin-top: 20px;">
            <h3 style="color: #4A5568;">Message/Notes</h3>
            <p>${message || "No additional notes provided."}</p>
          </div>

          <div style="margin-top: 30px; font-size: 12px; color: #718096; text-align: center;">
            Sent from Aisha Academy Website
          </div>
        </div>
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
      },
    ]);

    if (dbError) {
      console.error("Database Error:", dbError);
    }

    // 2. Send Email
    console.log("Attempting to send contact email to:", adminEmail);
    const { data, error } = await resend.emails.send({
      from: "Aisha Academy <info@aisha-academy.com>",
      to: [adminEmail],
      replyTo: email,
      subject: `New Contact Inquiry: ${inquiry} from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #2D3748; border-bottom: 2px solid #E2E8F0; padding-bottom: 10px;">New Contact Inquiry</h2>
          
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Inquiry Type:</strong> ${inquiry}</p>
          </div>

          <div style="margin-top: 20px;">
            <h3 style="color: #4A5568;">Message</h3>
            <p>${message}</p>
          </div>

          <div style="margin-top: 30px; font-size: 12px; color: #718096; text-align: center;">
            Sent from Aisha Academy Website
          </div>
        </div>
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
    return { success: false, error: "Failed to send inquiry" };
  }
}
