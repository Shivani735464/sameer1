import React from "react";
import { Target, Lightbulb, Rocket } from "lucide-react";
import StarBorder from "../components/StarBorder";
import { useLanguage } from "../context/LanguageContext";

const HomeVision = () => {
  const { language } = useLanguage();

 const texts = {
  en: {
    heading: "Our Vision",
    description:
      "We aim to empower individuals and small businesses by delivering affordable, high-quality websites and digital solutions. Our mission is to make the web accessible for everyone.",
    cards: [
      {
        title: "Vision",
        icon: <Target className="text-sky-400 w-6 h-6 sm:w-8 sm:h-8" />,
        color: "sky",
        text: "To build a digital ecosystem where anyone can own a website without worrying about high costs or complex processes.",
      },
      {
        title: "Mission",
        icon: <Lightbulb className="text-emerald-400 w-6 h-6 sm:w-8 sm:h-8" />,
        color: "emerald",
        text: "To provide creative, responsive, and secure websites for startups, entrepreneurs, and small businesses, helping them go digital with ease.",
      },
      {
        title: "Goals",
        icon: <Rocket className="text-pink-400 w-6 h-6 sm:w-8 sm:h-8" />,
        color: "pink",
        text: "To deliver at least 100+ affordable websites this year, helping more businesses grow online and strengthening digital India.",
      },
    ],
    extraImage:
      "https://cdn.pixabay.com/photo/2016/10/24/23/11/doors-1767562_640.jpg",
    extraText:
      "We believe that every idea deserves a digital identity. With our team of passionate developers and designers, we are committed to making professional websites accessible for all.",
  },
  hi: {
    heading: "हमारा विज़न",
    description:
      "हमारा मक़सद है लोगों और छोटे बिज़नेस को ऐसी वेबसाइट देना जो बढ़िया भी हो और किफ़ायती भी। हमारी कोशिश है कि इंटरनेट सबके लिए आसान और सुलभ बने।",
    cards: [
      {
        title: "विज़न",
        icon: <Target className="text-sky-400 w-6 h-6 sm:w-8 sm:h-8" />,
        color: "sky",
        text: "ऐसा डिजिटल माहौल तैयार करना जहाँ हर कोई बिना ज़्यादा खर्च और झंझट के अपनी वेबसाइट बना सके।",
      },
      {
        title: "मिशन",
        icon: <Lightbulb className="text-emerald-400 w-6 h-6 sm:w-8 sm:h-8" />,
        color: "emerald",
        text: "स्टार्टअप्स, छोटे बिज़नेस और उद्यमियों के लिए क्रिएटिव, रिस्पॉन्सिव और सुरक्षित वेबसाइट बनाना, ताकि वो आसानी से ऑनलाइन आ सकें।",
      },
      {
        title: "लक्ष्य",
        icon: <Rocket className="text-pink-400 w-6 h-6 sm:w-8 sm:h-8" />,
        color: "pink",
        text: "इस साल कम से कम 100+ किफ़ायती वेबसाइट बनाना, ताकि और बिज़नेस ऑनलाइन बढ़ें और डिजिटल इंडिया मज़बूत बने।",
      },
    ],
    extraImage:
      "https://cdn.pixabay.com/photo/2016/10/24/23/11/doors-1767562_640.jpg",
    extraText:
      "हम मानते हैं कि हर आइडिया की अपनी डिजिटल पहचान होनी चाहिए। हमारी टीम के पैशनेट डेवलपर्स और डिज़ाइनर्स इस काम के लिए पूरी तरह समर्पित हैं कि हर किसी को प्रोफेशनल वेबसाइट आसानी से मिल सके।",
  },
};

  const data = texts[language];

  return (
    <section className="mt-9 text-white py-20 px-6 min-h-screen flex flex-col justify-center">
      {/* Heading */}
      <div className="text-center mb-12 px-2">
        <h1 className="text-3xl md:text-5xl font-bold">
          {data.heading.split(" ")[0]}{" "}
          <span className="text-blue-300">
            {data.heading.split(" ").slice(1).join(" ")}
          </span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          {data.description}
        </p>
      </div>

      {/* Vision Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
        {data.cards.map((card, index) => (
          <StarBorder
            key={index}
            className="custom-class"
            color="cyan"
            speed="5s"
          >
            <div className={`bg-gray-800/60 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300`}>
              <div className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-${card.color}-600/20 mx-auto mb-6`}>
                {card.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-center mb-3">
                {card.title}
              </h3>
              <p className="text-gray-300 text-center text-sm sm:text-base">
                {card.text}
              </p>
            </div>
          </StarBorder>
        ))}
      </div>

      {/* Extra image section */}
      <div className="max-w-5xl mx-auto mt-16 sm:mt-20 text-center px-2">
        <img
          src={data.extraImage}
          alt="Company Vision"
          className="rounded-2xl shadow-lg mx-auto object-cover w-full max-h-[250px] sm:max-h-[350px] md:max-h-[400px]"
        />
        <p className="mt-6 text-gray-400 text-sm sm:text-lg max-w-3xl mx-auto">
          {data.extraText}
        </p>
      </div>
    </section>
  );
};

export default HomeVision;