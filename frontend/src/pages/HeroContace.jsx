import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const HeroContace = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

 const texts = {
  en: {
    heading: "Contact Us",
    subheading:
      "We take pride in delivering websites that not only look stunning but also perform flawlessly. Your trust and satisfaction drive us to keep raising the bar with every project we build.",
    leftTitle: "Get in Touch",
    leftDesc:
      "We’re here to assist you with any queries or support you need. Connect with us today and let’s start building something amazing.",
    callUs: "Call us at",
    formLabels: {
      firstName: "First Name",
      lastName: "Last Name",
      mobile: "Mobile Number",
      message: "Message",
    },
    button: "Send Message",
  },
  hi: {
    heading: "संपर्क करें",
    subheading:
      "हमें गर्व है कि हम ऐसी वेबसाइट्स बनाते हैं जो सिर्फ सुंदर दिखती ही नहीं बल्कि बेहतरीन तरीके से काम भी करती हैं। आपका भरोसा और संतुष्टि हमें हर नए प्रोजेक्ट के साथ और बेहतर करने के लिए प्रेरित करती है।",
    leftTitle: "हमसे जुड़ें",
    leftDesc:
      "अगर आपके पास कोई सवाल है या मदद चाहिए, तो हम हमेशा तैयार हैं। आज ही हमसे संपर्क करें और साथ मिलकर कुछ शानदार बनाते हैं।",
    callUs: "कॉल करें",
    formLabels: {
      firstName: "पहला नाम",
      lastName: "अंतिम नाम",
      mobile: "मोबाइल नंबर",
      message: "आपका संदेश",
    },
    button: "संदेश भेजें",
  },
};

  const t = texts[language];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, formData);

      if (res.data.message === "superadmin_redirect") {
        alert("Superadmin detected ✅ Redirecting...");
         localStorage.setItem("isSuperAdmin", "true");
        navigate("/userlist");
      } else {
        alert(language === "hi" ? "संदेश सफलतापूर्वक भेजा गया ✅" : "Message Sent Successfully ✅");
      }

      setFormData({
        firstName: "",
        lastName: "",
        mobile: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert(language === "hi" ? "कुछ गलत हो गया" : "Something went wrong");
    }
  };

  

  return (
    <section className="min-h-[70vh] flex flex-col mb-20 justify-center items-center px-4 sm:px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          {t.heading.split(" ")[0]} <span className="text-blue-300">{t.heading.split(" ").slice(1).join(" ")}</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">{t.subheading}</p>
      </div>

      {/* Main Card */}
      <div className="bg-gray-800 rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 w-full max-w-[90vw] overflow-hidden">
        {/* Left Side */}
        <div className="p-6 sm:p-10 flex flex-col justify-center bg-gray-700">
          <img
            src="https://cdn.pixabay.com/photo/2012/12/20/10/12/align-fingers-71282_640.jpg"
            alt="Contact"
            className="w-full h-48 sm:h-52 object-cover rounded-xl shadow-lg mb-4 sm:mb-6"
          />
          <h1 className="text-2xl text-white sm:text-3xl font-bold mb-2 sm:mb-4">{t.leftTitle}</h1>
          <p className="text-gray-300 mb-2 sm:mb-4 text-sm sm:text-base">{t.leftDesc}</p>
          <p className="text-gray-300 text-sm sm:text-base">
            {t.callUs} <span className="font-bold text-blue-400">+91 9109622511</span>
          </p>
        </div>

        {/* Right Side Form */}
        <div className="p-6 sm:p-10 flex items-center">
          <form onSubmit={handleSubmit} className="w-full space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">{t.formLabels.firstName}</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">{t.formLabels.lastName}</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">{t.formLabels.mobile}</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">{t.formLabels.message}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition"
            >
              {t.button}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroContace;