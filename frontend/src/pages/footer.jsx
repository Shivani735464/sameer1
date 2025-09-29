import React from "react";
import {
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  const texts = {
  en: {
    companyDesc:
      "We specialize in building modern, affordable, and responsive websites. Helping businesses and individuals bring their ideas to life online.",
    quickLinks: "Quick Links",
    links: ["Home", "About", "Design", "Our Services", "Pricing", "Contact Us"],
    contactTitle: "Contact Us",
    phone: "Call",
    email: "Email",
    location: "Location",
    bottomLine: `© ${new Date().getFullYear()} WEB_V. All rights reserved.`,
  },
  hi: {
    companyDesc:
      "हम मॉडर्न, किफायती और मोबाइल-फ्रेंडली वेबसाइट्स बनाने में माहिर हैं। हम बिज़नेस और लोगों को उनके आइडियाज़ को ऑनलाइन हकीकत बनाने में मदद करते हैं।",
    quickLinks: "ज़रूरी लिंक",
    links: ["होम", "हमारे बारे में", "डिज़ाइन", "हमारी सेवाएँ", "प्लान/कीमतें", "संपर्क करें"],
    contactTitle: "हमसे जुड़ें",
    phone: "कॉल",
    email: "ईमेल",
    location: "पता",
    bottomLine: `© ${new Date().getFullYear()} WEB_V. सभी अधिकार सुरक्षित।`,
  },
};

  const t = texts[language];

  return (
    <footer className="bg-black relative z-5 text-gray-300 py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left - Company Info + Image */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="https://cdn.pixabay.com/photo/2015/01/01/23/55/telephone-586266_640.jpg"
            alt="Contact Us"
            className="w-32 sm:w-36 h-32 sm:h-36 rounded-xl object-cover mb-4 sm:mb-5 shadow-lg"
          />
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
            WEB_V
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">{t.companyDesc}</p>
        </div>

        {/* Middle - Quick Links */}
        <div className="text-center md:text-left mt-6 md:mt-0">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-5">
            {t.quickLinks}
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
            {t.links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={`/${link.toLowerCase().replace(/\s+/g, "")}`}
                  className="hover:text-blue-400 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Contact Info */}
        <div className="text-center md:text-left mt-6 md:mt-0">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-5">
            {t.contactTitle}
          </h3>
          <p className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 mb-2 sm:mb-3 text-sm sm:text-base">
            <FaPhoneAlt className="text-blue-400" />whatsapp +91 9109622511
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 mb-2 sm:mb-3 text-sm sm:text-base">
            <FaEnvelope className="text-blue-400" /> raj6264640954@gmail.com
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6 text-sm sm:text-base">
            <FaMapMarkerAlt className="text-blue-400" /> Indore, Madhya Pradesh, India
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4">
            <a
              href="https://www.linkedin.com/in/sameer-sharma-841100291/"
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-700 hover:bg-blue-600 rounded-full transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-xs sm:text-sm mt-8 sm:mt-12 border-t border-gray-700 pt-4 sm:pt-6">
        {t.bottomLine}
      </div>
    </footer>
  );
};

export default Footer;