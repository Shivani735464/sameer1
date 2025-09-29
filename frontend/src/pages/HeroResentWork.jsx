import React from "react";
import { useLanguage } from "../context/LanguageContext";

const HeroResentWork = () => {
  const { language } = useLanguage();

  const texts = {
  en: {
    heading: "Recent Work",
    description: "Some of our latest projects delivered with passion and dedication.",
    projects: [
      {
        title: "Landing Page Project",
        image: "https://cdn.pixabay.com/photo/2016/11/29/09/32/concept-1868728_640.jpg",
        description: "A modern landing page built with React, Tailwind, and GSAP animations.",
      },
      {
        title: "Portfolio Website",
        image: "https://cdn.pixabay.com/photo/2020/11/03/15/32/man-5710164_1280.jpg",
        description: "A personal portfolio showcasing skills, projects, and contact form.",
      },
      {
        title: "E-commerce Store",
        image: "https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849804_640.jpg",
        description: "A full-stack e-commerce website with cart, checkout, and payment integration.",
      },
      {
        title: "Responsive Business Site",
        image: "https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333_640.jpg",
        description: "Fully responsive corporate site optimized for mobile and desktop.",
      },
      {
        title: "Web Application",
        image: "https://cdn.pixabay.com/photo/2015/01/08/18/11/laptops-593296_640.jpg",
        description: "Custom web app developed with MERN stack and secure authentication.",
      },
    ],
    extraContent: {
      paragraph:
        "Our projects are not just websites, but solutions crafted to help clients grow their businesses online. We focus on innovation, design, and performance to ensure every site we deliver stands out.",
      bullets: [
        "Modern and clean UI with responsive design.",
        "Optimized for speed and SEO performance.",
        "Affordable solutions without compromising quality.",
        "Custom features tailored for client needs.",
        "Continuous support and maintenance after launch.",
      ],
    },
  },
  hi: {
    heading: "हाल के काम",
    description: "हमारे कुछ नए प्रोजेक्ट्स, जो पूरे जुनून और मेहनत से बनाए गए हैं।",
    projects: [
      {
        title: "लैंडिंग पेज प्रोजेक्ट",
        image: "https://cdn.pixabay.com/photo/2016/11/29/09/32/concept-1868728_640.jpg",
        description: "React, Tailwind और GSAP एनीमेशन से बना एक मॉडर्न लैंडिंग पेज।",
      },
      {
        title: "पोर्टफोलियो वेबसाइट",
        image: "https://cdn.pixabay.com/photo/2020/11/03/15/32/man-5710164_1280.jpg",
        description: "एक पर्सनल पोर्टफोलियो जिसमें स्किल्स, प्रोजेक्ट्स और कॉन्टैक्ट फॉर्म शामिल हैं।",
      },
      {
        title: "ई-कॉमर्स स्टोर",
        image: "https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849804_640.jpg",
        description: "कार्ट, चेकआउट और पेमेंट सिस्टम के साथ बनाया गया फुल-स्टैक ई-कॉमर्स स्टोर।",
      },
      {
        title: "रिस्पॉन्सिव बिज़नेस साइट",
        image: "https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333_640.jpg",
        description: "मोबाइल और डेस्कटॉप दोनों के लिए पूरी तरह से रिस्पॉन्सिव कॉर्पोरेट साइट।",
      },
      {
        title: "वेब एप्लिकेशन",
        image: "https://cdn.pixabay.com/photo/2015/01/08/18/11/laptops-593296_640.jpg",
        description: "MERN स्टैक से बनी कस्टम वेब ऐप, जिसमें सिक्योर लॉगिन/ऑथेंटिकेशन है।",
      },
    ],
    extraContent: {
      paragraph:
        "हमारे प्रोजेक्ट्स सिर्फ वेबसाइट नहीं, बल्कि ऐसे सॉल्यूशंस हैं जो क्लाइंट्स को उनका ऑनलाइन बिज़नेस बढ़ाने में मदद करते हैं। हम डिज़ाइन, इनोवेशन और परफॉर्मेंस पर फोकस करते हैं ताकि हर साइट अलग और बेहतरीन लगे।",
      bullets: [
        "मॉडर्न और क्लीन UI, पूरी तरह रिस्पॉन्सिव।",
        "स्पीड और SEO के लिए ऑप्टिमाइज़्ड।",
        "क्वालिटी से समझौता किए बिना किफ़ायती पैकेज।",
        "क्लाइंट की ज़रूरत के हिसाब से कस्टम फीचर्स।",
        "लॉन्च के बाद भी लगातार सपोर्ट और मेंटेनेंस।",
      ],
    },
  },
};

  const data = texts[language];

  return (
    <section className="mb-16 text-white min-h-screen py-16 flex flex-col justify-center">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          {data.heading.split(" ")[0]}{" "}
          <span className="text-blue-300">{data.heading.split(" ").slice(1).join(" ")}</span>
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base max-w-2xl mx-auto">
          {data.description}
        </p>
      </div>

      {/* Horizontal scroll */}
      <div className="w-full overflow-x-auto scrollbar-hide px-4">
        <div className="flex gap-6 md:gap-8">
          {data.projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] 
                     h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] 
                     bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[65%] object-cover"
              />
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-base sm:text-lg">{project.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extra content */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-10 items-center px-6">
        <div>
          <p className="text-base md:text-lg mb-6 text-gray-300">{data.extraContent.paragraph}</p>
          <ul className="list-disc list-inside space-y-3 text-gray-400 text-sm md:text-base">
            {data.extraContent.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2021/07/26/13/24/el-6494302_640.jpg"
            alt="Project Work"
            className="rounded-2xl shadow-lg w-full max-w-[500px] h-[220px] sm:h-[300px] md:h-[350px] object-cover"
          />
        </div>
      </div>

      <style>
        {`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}
      </style>
    </section>
  );
};

export default HeroResentWork;