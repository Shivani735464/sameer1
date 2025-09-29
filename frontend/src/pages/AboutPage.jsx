import React, { useEffect } from "react";
import {
  FaUsers,
  FaLaptopCode,
  FaRegHandshake,
  FaBullseye,
} from "react-icons/fa";
import { GiTargetPrize, GiLightBulb, GiRocket, GiBrain } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import Footer from "./footer";
import Nav from "../components/nav";
import CircularGallery from "../components/CircularGallery";
import { useLanguage } from "../context/LanguageContext";

const reviewsData = [
  {
    name: "Priya Sharma",
    review_en: "Very professional service. They understood my needs and gave me a beautiful site.",
    review_hi: "बहुत प्रोफेशनल सेवा। उन्होंने मेरी ज़रूरतें समझीं और मुझे एक शानदार वेबसाइट दी।",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Karan Verma",
    review_en: "Affordable, creative, and quick support! My business website looks fantastic.",
    review_hi: "सस्ती, क्रिएटिव और तुरंत सपोर्ट! मेरी बिज़नेस वेबसाइट दिखने में शानदार है।",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    name: "Neha Kapoor",
    review_en: "They built a modern, fast, and responsive website for my store. Highly recommend!",
    review_hi: "उन्होंने मेरे स्टोर के लिए मॉडर्न, फास्ट और मोबाइल-फ्रेंडली वेबसाइट बनाई। ज़रूर रेकमेंड करती हूँ!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    name: "Rohit Malhotra",
    review_en: "Very satisfied with the service. They were patient and guided me through everything.",
    review_hi: "सेवा से बहुत खुश हूँ। वे धैर्य रखते हुए हर स्टेप में मेरी मदद और गाइडेंस दी।",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/58.jpg",
  },
];


const AboutPage = () => {
  const { language } = useLanguage();
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const coreValues = [
  {
    title: "Innovation",
    icon: <GiBrain className="text-blue-400 w-12 h-12" />,
    desc_en: "We embrace new ideas and creative solutions.",
    desc_hi: "हम नए आइडियाज़ और क्रिएटिव हल अपनाते हैं।",
  },
  {
    title: "Excellence",
    icon: <GiTargetPrize className="text-blue-400 w-12 h-12" />,
    desc_en: "We strive for high-quality results in everything we do.",
    desc_hi: "हम हर काम में बेहतरीन और उच्च गुणवत्ता वाले रिजल्ट देने की कोशिश करते हैं।",
  },
  {
    title: "Collaboration",
    icon: <GiLightBulb className="text-blue-400 w-12 h-12" />,
    desc_en: "Teamwork drives the best solutions for our clients.",
    desc_hi: "टीमवर्क हमारे क्लाइंट्स के लिए सबसे अच्छे समाधान लाता है।",
  },
  {
    title: "Adaptability",
    icon: <GiRocket className="text-blue-400 rotate-180 w-12 h-12" />,
    desc_en: "We adjust quickly to changing requirements and trends.",
    desc_hi: "हम बदलती जरूरतों और ट्रेंड्स के अनुसार जल्दी एडजस्ट कर लेते हैं।",
  },
  {
    title: "Integrity",
    icon: <FaRegHandshake className="text-blue-400 w-12 h-12" />,
    desc_en: "We uphold honesty, transparency, and trust.",
    desc_hi: "हम हमेशा ईमानदारी, पारदर्शिता और भरोसा बनाए रखते हैं।",
  },
  {
    title: "Client Focus",
    icon: <FaUsers className="text-blue-400 w-12 h-12" />,
    desc_en: "Our clients’ satisfaction is our top priority.",
    desc_hi: "हमारे क्लाइंट्स की खुशी और संतोष हमारी सबसे बड़ी प्राथमिकता है।",
  },
];

  const texts = {
  en: {
    heading: "Who We Are",
    description1:
      "We are a passionate team of web developers and designers committed to delivering high-quality, affordable, and professional websites. We specialize in creating responsive, user-friendly websites for startups, entrepreneurs, and businesses looking to establish their online presence.",
    description2:
      "Our targeted clients include small and medium businesses, individuals starting their digital journey, and anyone seeking a professional online presence without breaking the bank.",
    highlights: [
      "Collaborative & Dedicated Team",
      "Innovative & Modern Web Solutions",
      "Client-focused & Results-driven",
    ],
    heading22: "What Makes Us Different",
    description22:
      "Our approach to web development ensures that every client receives unique, innovative, and high-quality solutions that truly stand out.",
  },
  hi: {
    heading: "हम कौन हैं",
    description1:
      "हम वेब डेवलपमेंट और डिजाइन में जुनून रखने वाली एक टीम हैं, जो उच्च गुणवत्ता, किफायती और पेशेवर वेबसाइट्स बनाने के लिए समर्पित है। हम स्टार्टअप्स, उद्यमियों और व्यवसायों के लिए रेस्पॉन्सिव और यूज़र-फ्रेंडली वेबसाइट्स तैयार करते हैं।",
    description2:
      "हमारे लक्षित ग्राहक छोटे और मध्यम व्यवसाय, डिजिटल यात्रा शुरू करने वाले व्यक्ति, और वो सभी हैं जो पेशेवर ऑनलाइन उपस्थिति चाहते हैं बिना ज्यादा खर्च किए।",
    highlights: [
      "सहयोगी और समर्पित टीम",
      "नवीन और आधुनिक वेब समाधान",
      "ग्राहक-केंद्रित और परिणामोन्मुखी",
    ],
    heading22: "हमें अलग क्या बनाता है",
    description22:
      "हमारी वेब डेवलपमेंट प्रक्रिया यह सुनिश्चित करती है कि हर ग्राहक को अनोखे, नवाचारी और उच्च गुणवत्ता वाले समाधान मिलें जो वास्तव में अलग दिखें।",
  },
};

  const t = texts[language];
  return (
    <>
    <div className="text-white w-full min-h-screen space-y-32">
      {/* Who We Are */}
     <section className="flex flex-col md:flex-row h-screen items-center justify-between max-w-8xl mx-auto px-6 md:px-12 py-16 md:py-0 mb-90 md:mb-0 gap-12">
      {/* Left Side - Content */}
      <div className="md:w-1/2 flex flex-col justify-center space-y-6">
        <h1 className="relative z-10 text-4xl md:text-8xl font-bold text-white">
          {t.heading.includes("हम") ? <span className="text-blue-400">{t.heading}</span> : <>Who <span className="text-blue-400">We Are</span></>}
        </h1>
        <p className="text-gray-300 text-lg md:text-xl relative z-10">{t.description1}</p>
        <p className="relative z-10 text-gray-300 text-lg md:text-xl">{t.description2}</p>

        {/* Highlights with Icons */}
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex items-center gap-3 text-gray-300">
            <FaUsers className="relative z-10 text-blue-400 w-6 h-6" />
            <span className="relative z-10">{t.highlights[0]}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <FaLaptopCode className="relative z-10 text-blue-400 w-6 h-6" />
            <span className="relative z-10">{t.highlights[1]}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <FaBullseye className="relative z-10 text-blue-400 w-6 h-6" />
            <span className="relative z-10">{t.highlights[2]}</span>
          </div>
        </div>
      </div>

        {/* Right Side - Single Image */}
        <div className="relative z-10 md:w-1/2 flex justify-center items-center">
          <img
            src="https://cdn.pixabay.com/photo/2017/05/02/03/41/action-2277292_640.jpg"
            alt="Web Development"
            className="rounded-2xl shadow-2xl w-full h-[50vh] object-cover"
          />
        </div>
      </section>







 <div style={{ height: '600px', position: 'relative', zIndex: 10, marginBottom: '300px' }}>
      <div className="text-center">
        <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-white">
          {language === 'hi' ? <span className="text-blue-400">{t.heading22}</span> : <>What Makes Us <span className="text-blue-400">Different</span></>}
        </h2>
        <p className="relative z-10 text-gray-400 mt-4 max-w-2xl mx-auto">
          {t.description22}
        </p>
      </div>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>









   













      {/* Reviews */}
      <section className="max-w-8xl h-[78vh] mx-auto space-y-10 py-16 px-4 mb-210 md:mb-0">
      {/* Heading & Intro Paragraph */}
     <div className="text-center space-y-4">
  <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-white">
    {language === "hi" ? "हमारे क्लाइंट्स क्या कहते हैं" : "What Our Clients Say"}
  </h2>
  <p className="relative z-10 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
    {language === "hi"
      ? "हम ऐसी वेबसाइट्स बनाने पर गर्व महसूस करते हैं जो हमारे क्लाइंट्स के व्यवसाय को ऑनलाइन बढ़ाने में मदद करती हैं। यहाँ कुछ उनके विचार देखें।"
      : "We take pride in delivering top-notch websites that help our clients grow their businesses online. Here’s what some of them have to say about working with us."}
  </p>
</div>

      {/* Client Reviews */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-start flex-wrap">
        {reviewsData.map((r, idx) => (
          <div
            key={idx}
            className="relative z-10 bg-gray-800 p-6 rounded-2xl shadow-lg max-w-[400px] flex flex-col items-center text-center hover:scale-105 transform transition"
          >
            <img
              src={r.image}
              alt={r.name}
              className="w-20 h-20 rounded-full mb-4 border-4 border-blue-400"
            />
            <h3 className="font-semibold text-xl mb-2 text-white">{r.name}</h3>
            <p className="text-gray-300 mb-3">
              {language === "hi" ? r.review_hi : r.review_en}
            </p>
            <div className="flex">
              {[...Array(r.rating)].map((_, i) => (
                <AiFillStar key={i} className="text-yellow-400 w-5 h-5" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>















 <section className="w-full h-[80vh] overflow-hidden py-16">
      {/* Heading */}
     <div className="text-center mb-12">
  <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-white mb-4">
    {language === "hi" ? "हमारे मूल मूल्य" : "Our Core Values"}
  </h2>
  <p className="text-gray-400 relative z-10 text-lg md:text-xl max-w-3xl mx-auto">
    {language === "hi"
      ? "हमारे मूल मूल्य यह निर्धारित करते हैं कि हम कौन हैं और अपने क्लाइंट्स के साथ काम करने का हमारा तरीका। ये उत्कृष्टता, नवाचार और ग्राहक संतुष्टि के प्रति हमारी प्रतिबद्धता को दर्शाते हैं।"
      : "Our core values define who we are and guide the way we work with our clients. They represent our commitment to excellence, innovation, and customer satisfaction."}
  </p>
</div>

      {/* Infinite Scroller */}
      <div className="relative w-full z-10 overflow-hidden">
        <div className="flex animate-scroll space-x-8 whitespace-nowrap">
          {coreValues.concat(coreValues).map((v, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-8 min-w-[280px] rounded-3xl shadow-xl flex flex-col items-center text-center hover:scale-105 transform transition duration-300 hover:shadow-blue-400/50"
            >
              <div className="mb-4">{v.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">{v.title}</h3>
              <p className="text-gray-300 text-sm whitespace-normal break-words">
                {language === "hi" ? v.desc_hi : v.desc_en}
              </p>
            </div>
          ))}
        </div>

        {/* Animation CSS */}
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              display: flex;
              animation: scroll 30s linear infinite;
            }
          `}
        </style>
      </div>
    </section>













    </div>
    <div className="relative z-10">
    <Footer />

    </div>

    </>
  );
};

export default AboutPage;
