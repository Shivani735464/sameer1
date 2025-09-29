import React from "react";
import CardSwap, { Card } from "../components/CardSwap";
import TextType from "../components/TextType";
import HeroAbout from "./HeroAbout";
import HeroOurServices from "./HeroOurServices";
import { useLanguage } from "../context/LanguageContext"; // ✅ Import Language Context
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const text = {
  en: {
    heading: ["Build your future ready website today, with us"],
    description:
      "We create modern, scalable and responsive websites tailored to your business needs. Our solutions ensure speed, security and a premium user experience that helps you stay ahead in the digital era.",
    btnStart: "Let’s Start",
    btnView: "View More",
    card1: "Smooth",
    card2: "Reliable",
    card3: "Customizable",
  },
  hi: {
    heading: ["आज ही हमारे साथ अपनी आने वाले कल की वेबसाइट बनाओ"],
    description:
      "हम आपके बिज़नेस के लिए मॉडर्न, तेज़ और मोबाइल-फ्रेंडली वेबसाइट बनाते हैं। हमारी साइट्स फ़ास्ट, सिक्योर होती हैं और ऐसा एक्सपीरियंस देती हैं जिससे आपका बिज़नेस डिजिटल दुनिया में आगे रहे।",
    btnStart: "शुरू करें",
    btnView: "और देखें",
    card1: "स्मूद",
    card2: "भरोसेमंद",
    card3: "आपके हिसाब से",
  },
};

  return (
    <>
      <div className="h-[120vh] md:h-screen w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-12 relative overflow-hidden">
        {/* ===== Left Content ===== */}
        <div className="flex-1 relative z-10 text-white mb-8 md:mb-0 md:pr-10 mt-30 md:mt-0">
          <h1 className="text-3xl md:text-6xl font-bold leading-snug mb-6">
            <TextType
              text={text[language].heading}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h1>

          <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-6">
            {text[language].description}
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => navigate("/pricing")}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 transition-all rounded-xl text-white font-semibold shadow-lg"
            >
              {text[language].btnStart}
            </button>
          </div>
        </div>

        {/* ===== Right Cards ===== */}
        <div className="flex-1 relative z-10 w-full h-[40vh] md:h-[50vh] mr-60 md:mr-0 md:w-auto">
          <CardSwap cardDistance={60} verticalDistance={120} delay={5000} pauseOnHover={false}>
            <Card>
              <div className="w-[95%] h-full mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center group">
                <p className="text-white text-2xl ml-5 w-full md:text-3xl font-extrabold tracking-wide mt-4 mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {text[language].card1}
                </p>
                <img
                  src="https://cdn.pixabay.com/photo/2015/09/04/23/28/wordpress-923188_960_720.jpg"
                  alt="Smooth"
                  className="w-[90%] h-[75%] object-cover rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Card>

            <Card>
              <div className="w-[95%] h-full mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center group">
                <p className="text-white ml-5 w-full text-2xl md:text-3xl font-extrabold tracking-wide mt-4 mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {text[language].card2}
                </p>
                <img
                  src="https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333_640.jpg"
                  alt="Reliable"
                  className="w-[90%] h-[75%] object-cover rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Card>

            <Card>
              <div className="w-[95%] h-full mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center group">
                <p className="text-white ml-5 w-full text-2xl md:text-3xl font-extrabold tracking-wide mt-4 mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {text[language].card3}
                </p>
                <img
                  src="https://cdn.pixabay.com/photo/2022/02/15/10/39/point-7014645_640.jpg"
                  alt="Customizable"
                  className="w-[90%] h-[75%] object-cover rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Card>
          </CardSwap>
        </div>

      </div>

      <HeroAbout />
      <HeroOurServices />
            {/* <IntroPage /> */}
    </>
  );
}

export default HeroSection;