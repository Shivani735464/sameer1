import React from "react";
import DecayCard from "../components/DecayCard";
import { FaUsers, FaLaptopCode, FaRegHandshake } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { useLanguage } from "../context/LanguageContext"; // ✅ Import Language Context

export default function HeroAbout() {
  const { language } = useLanguage();

 const text = {
  en: {
    heading: "About Us",
    description:
      "We are a team of friends who started this platform to help people who cannot afford expensive websites. Our goal is to make professional and affordable websites for anyone who wants to start their online journey. We believe that everyone deserves a chance to bring their ideas online.",
    sections: [
      {
        icon: <FaUsers className="text-indigo-500 relative z-10  text-3xl sm:text-4xl" />,
        title: "Our Team",
        desc: "A passionate group of friends working together to deliver quality websites.",
      },
      {
        icon: <FaLaptopCode className="text-indigo-500 relative z-10  text-3xl sm:text-4xl" />,
        title: "Web Development",
        desc: "We build modern, responsive, and user-friendly websites that work on all devices.",
      },
      {
        icon: <MdDesignServices className="text-indigo-500 relative z-10  text-3xl sm:text-4xl" />,
        title: "Affordable Services",
        desc: "We provide budget-friendly services so that anyone can launch their own website.",
      },
      {
        icon: <FaRegHandshake className="text-indigo-500 relative z-10  text-3xl sm:text-4xl" />,
        title: "Customer Support",
        desc: "We guide our clients at every step and provide them with reliable support.",
      },
    ],
    mission:
      "Our mission is to empower individuals and small businesses by providing them with affordable and professional websites. We believe technology should be accessible to everyone, not just to those who can pay high costs.",
  },
  hi: {
    heading: "हमारे बारे में",
    description:
      "हम दोस्तों की एक टीम हैं, जिन्होंने ये प्लेटफ़ॉर्म शुरू किया ताकि उन लोगों की मदद हो सके जो महंगे वेबसाइट नहीं बनवा पाते। हमारा मक़सद है हर किसी के लिए सस्ती और प्रोफेशनल वेबसाइट बनाना, जिससे वो अपनी ऑनलाइन जर्नी शुरू कर सके। हम मानते हैं कि हर किसी को अपने आइडियाज़ को इंटरनेट पर लाने का मौका मिलना चाहिए।",
    sections: [
      {
        icon: <FaUsers className="text-indigo-500 relative z-10  text-3xl sm:text-4xl" />,
        title: "हमारी टीम",
        desc: "दोस्तों का एक जोश से भरा ग्रुप, जो मिलकर बढ़िया वेबसाइट्स बना रहा है।",
      },
      {
        icon: <FaLaptopCode className="text-indigo-500 relative z-10  text-3xl sm:text-4xl" />,
        title: "वेब डेवलपमेंट",
        desc: "हम मॉडर्न, मोबाइल-फ्रेंडली और आसान इस्तेमाल वाली वेबसाइट बनाते हैं, जो हर डिवाइस पर सही से चलती है।",
      },
      {
        icon: <MdDesignServices className="text-indigo-500 relative z-10  text-3xl sm:text-4xl" />,
        title: "किफ़ायती सेवाएँ",
        desc: "हम ऐसी सर्विस देते हैं जो आपके बजट में हो, ताकि कोई भी अपनी वेबसाइट आसानी से लॉन्च कर सके।",
      },
      {
        icon: <FaRegHandshake className="text-indigo-500 relative z-10  text-3xl sm:text-4xl" />,
        title: "कस्टमर सपोर्ट",
        desc: "हम अपने क्लाइंट्स को हर स्टेप पर गाइड करते हैं और हमेशा भरोसेमंद सपोर्ट देते हैं।",
      },
    ],
    mission:
      "हमारा मिशन है छोटे बिज़नेस और लोगों को ताक़त देना, उन्हें सस्ती और प्रोफेशनल वेबसाइट देकर। हमारा मानना है कि टेक्नोलॉजी सबके लिए आसान और सुलभ होनी चाहिए, सिर्फ़ उनके लिए नहीं जो ज़्यादा पैसे खर्च कर सकते हैं।",
  },
};

  return (
    <div className="min-h-screen text-white px-4 sm:px-6 md:px-12 py-12 sm:py-16 flex flex-col justify-center items-center">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center px-2">
        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          {text[language].heading}
        </h1>
        <p className="text-gray-400 relative z-10 text-base sm:text-lg md:text-xl leading-relaxed">
          {text[language].description}
        </p>
      </div>

      {/* Section */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center w-full max-w-6xl">
        {/* Image */}
        <div className="relative z-10 flex justify-center">
          <DecayCard
            width={window.innerWidth < 640 ? 200 : 500}
            height={window.innerWidth < 640 ? 150 : 220}
            image="https://cdn.pixabay.com/photo/2014/08/15/06/15/imprint-418593_640.jpg"
          />
        </div>

        {/* Content */}
        <div className="space-y-6 sm:space-y-8 px-2 sm:px-4">
          {text[language].sections.map((section, idx) => (
            <div key={idx} className="flex items-start gap-3 sm:gap-4">
              {section.icon}
              <div>
                <h2 className="text-lg sm:text-xl relative z-10 font-semibold">
                  {section.title}
                </h2>
                <p className="text-gray-400 relative z-10 text-sm sm:text-base leading-relaxed">
                  {section.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission */}
      <div className="mt-12 sm:mt-20 max-w-4xl mx-auto text-center px-3">
        <p className="text-gray-400 relative z-10 text-base sm:text-lg leading-relaxed">
          {text[language].mission}
        </p>
      </div>
    </div>
  );
}