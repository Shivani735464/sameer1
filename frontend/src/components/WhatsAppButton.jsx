import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const handleClick = () => {
    // Replace with your number & optional message
    const phoneNumber = "919876543210"; // <-- Apna number yaha likho (country code ke sath)
    const message = "Hello, I want to know more about your services!";
    const url = `https://wa.me/919109622511`;

    window.open(url, "_blank"); // Open WhatsApp chat in new tab
  };

  return (
    <div id="whatsapp-icon" className="fixed bottom-6 right-5 z-30 mb-18 md:mb-0">
      <button
        onClick={handleClick}
        className="group flex items-center gap-2 bg-green-500 text-white pl-4 pr-2 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      >
        {/* Icon */}
        <FaWhatsapp size={24} className="flex-shrink-0" />

        {/* Text (slide-in effect) */}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:pl-1 transition-all duration-500 ease-in-out whitespace-nowrap">
          WhatsApp
        </span>
      </button>
    </div>
  );
};

export default WhatsAppButton;