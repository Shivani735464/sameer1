
import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div id="language-switcher" className="fixed top-7 right-7 z-50 flex gap-2">
      <button
        className={`px-3 py-1 rounded ${language === "en" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
        onClick={() => toggleLanguage("en")}
      >
        EN
      </button>
      <button
        className={`px-3 py-1 rounded ${language === "hi" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
        onClick={() => toggleLanguage("hi")}
      >
        HI
      </button>
    </div>
  );
};

export default LanguageSwitcher;