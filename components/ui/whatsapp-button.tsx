"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton({
  message,
  tooltip,
}: {
  message?: string;
  tooltip?: string;
}) {
  const encodedMessage = encodeURIComponent(
    message ||
      "Assalamu Alaikum, I visited your website and I am interested in Aisha Academy. Could you please provide more details?",
  );

  return (
    <motion.a
      href={`https://wa.me/15145627711?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <FaWhatsapp className="w-8 h-8 relative z-10" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1.5 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {tooltip || "Chat with us"}
      </span>
    </motion.a>
  );
}
