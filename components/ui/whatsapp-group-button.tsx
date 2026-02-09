"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaUsers } from "react-icons/fa";

export default function WhatsappGroupButton({ tooltip }: { tooltip?: string }) {
  return (
    <motion.a
      href="https://chat.whatsapp.com/FTiqO0RSnKM5rgmrTCVBUM"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2 }}
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-[#128C7E] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group"
      aria-label="Join WhatsApp Group"
    >
      <div className="absolute inset-0 rounded-full bg-[#128C7E] animate-ping opacity-20" />
      <div className="relative z-10">
        <FaWhatsapp className="w-8 h-8" />
        <div className="absolute -top-1 -right-1 bg-white text-[#128C7E] rounded-full p-0.5 shadow-sm">
          <FaUsers className="w-3 h-3" />
        </div>
      </div>

      {/* Tooltip */}
      <span className="absolute left-full ml-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1.5 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {tooltip || "Join Group"}
      </span>
    </motion.a>
  );
}
