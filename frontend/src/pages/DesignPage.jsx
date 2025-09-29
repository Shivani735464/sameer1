import Masonry from "../components/Masonry";
import React, { useEffect } from "react";
import { Palette, Layers, Sparkles, Monitor, CheckCircle } from "lucide-react";
import Footer from "./footer";
import { useLanguage } from "../context/LanguageContext";

function DesignPage() {
  useEffect(() => {
    // Page load hote hi top par scroll karega
    window.scrollTo(0, 0);
  }, []);

const { language } = useLanguage();

  const items = [
    {
      id: "1",
      img: "https://cdn.pixabay.com/photo/2020/08/25/18/29/workplace-5517762_640.jpg",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://cdn.pixabay.com/photo/2017/03/07/23/33/technology-2125547_640.jpg",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "https://cdn.pixabay.com/photo/2020/02/11/19/56/laptop-4840790_640.jpg",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "4",
      img: "https://cdn.pixabay.com/photo/2020/10/08/14/39/man-5638146_640.jpg",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "5",
      img: "https://cdn.pixabay.com/photo/2022/11/03/15/24/coffee-7567749_640.jpg",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "6",
      img: "https://cdn.pixabay.com/photo/2020/04/02/22/05/home-office-4996834_640.jpg",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "7",
      img: "https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_640.jpg",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "8",
      img: "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_640.jpg",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "9",
      img: "https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_640.jpg",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "10",
      img: "https://cdn.pixabay.com/photo/2020/03/06/08/00/laptop-4906312_640.jpg",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "12",
      img: "https://cdn.pixabay.com/photo/2021/02/03/17/55/computer-5978788_640.jpg",
      url: "https://example.com/three",
      height: 600,
    },

  ];





 const cards = [
  {
    icon: <Palette className="w-10 h-10 text-indigo-500" />,
    title: "Creative UI",
    desc_en: "Modern and clean user interfaces designed with precision.",
    desc_hi: "सटीक और आधुनिक क्लीन यूज़र इंटरफेस।",
  },
  {
    icon: <Layers className="w-10 h-10 text-pink-500" />,
    title: "Layered Design",
    desc_en: "Organized, scalable, and reusable design systems.",
    desc_hi: "संगठित, स्केलेबल और पुन: उपयोग योग्य डिज़ाइन।",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-yellow-500" />,
    title: "Animations",
    desc_en: "Smooth animations and transitions for engaging UX.",
    desc_hi: "स्मूथ एनिमेशन और ट्रांज़िशन, UX को आकर्षक बनाते हैं।",
  },
  {
    icon: <Monitor className="w-10 h-10 text-green-500" />,
    title: "Responsive",
    desc_en: "Pixel-perfect layouts that adapt to all devices.",
    desc_hi: "पिक्सेल परफेक्ट लेआउट, सभी डिवाइसों पर अनुकूल।",
  },
];


const points1 = [
  {
    en: "We discuss project goals directly with clients.",
    hi: "हम क्लाइंट्स के साथ सीधे प्रोजेक्ट गोल्स पर चर्चा करते हैं।",
  },
  {
    en: "Understand their brand vision and identity.",
    hi: "उनके ब्रांड विज़न और पहचान को समझते हैं।",
  },
  {
    en: "Research their target audience.",
    hi: "लक्षित ऑडियंस का रिसर्च करते हैं।",
  },
  {
    en: "Analyze competitor websites.",
    hi: "प्रतियोगी वेबसाइट्स का विश्लेषण करते हैं।",
  },
  {
    en: "Create a clear project roadmap.",
    hi: "एक स्पष्ट प्रोजेक्ट रोडमैप तैयार करते हैं।",
  },
];

const points2 = [
  {
    en: "Design wireframes before development.",
    hi: "डेवलपमेंट से पहले वायरफ्रेम डिज़ाइन करते हैं।",
  },
  {
    en: "Customize layouts as per client feedback.",
    hi: "क्लाइंट फीडबैक के अनुसार लेआउट कस्टमाइज़ करते हैं।",
  },
  {
    en: "Develop responsive and scalable websites.",
    hi: "रेस्पॉन्सिव और स्केलेबल वेबसाइट्स बनाते हैं।",
  },
  {
    en: "Integrate latest tools and technologies.",
    hi: "नवीनतम टूल्स और तकनीक को इंटीग्रेट करते हैं।",
  },
  {
    en: "Deliver on-time with continuous support.",
    hi: "समय पर डिलीवर करते हैं और निरंतर सपोर्ट देते हैं।",
  },
];
const combinedPoints = [...points1, ...points2, ...points1];
  return (
    <>
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />











      <section className="min-h-[70vh] relative z-30 flex flex-col items-center justify-center text-white px-6 py-8">
      {/* Heading */}
     <div className="max-w-3xl text-center mb-16">
  <h2 className="text-4xl md:text-5xl font-bold mb-6">
    {language === "hi"
      ? "हमारा डिज़ाइन क्यों खास है"
      : "What Makes Our "} 
    <span className="text-indigo-500">
      {language === "hi" ? "डिज़ाइन" : "Design"}
    </span>{" "}
    {language === "hi" ? "अलग है" : "Unique"}
  </h2>
  <p className="text-lg text-gray-300">
    {language === "hi"
      ? "हम ऐसे डिज़ाइन बनाते हैं जो सुंदर और कार्यात्मक दोनों हों। हर विवरण पर ध्यान देकर सर्वोत्तम अनुभव सुनिश्चित किया जाता है।"
      : "We craft designs that are not only beautiful but also functional. Every detail is carefully thought out to deliver the best experience."}
  </p>
</div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:scale-105 hover:shadow-indigo-500/50 transition-transform duration-300"
          >
            {card.icon}
            <h3 className="text-xl font-semibold mt-4 mb-2">{card.title}</h3>
            <p className="text-gray-400 text-sm">
              {language === "hi" ? card.desc_hi : card.desc_en}
            </p>
          </div>
        ))}
      </div>
    </section>














       <section className="relative h-[77vh] z-20 text-white py-16 px-6 md:px-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.1),transparent_60%)]"></div>

      {/* Heading */}
     <div className="max-w-3xl mx-auto text-center mb-14 relative z-10">
  <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
    {language === "hi"
      ? "हम कैसे बनाते हैं आपकी वेबसाइट"
      : "How We "}{" "}
    <span className="text-indigo-500">
      {language === "hi" ? "वेबसाइट" : "Build Your Website"}
    </span>
  </h2>
  <p className="text-lg text-gray-300">
    {language === "hi"
      ? "हम एक सुव्यवस्थित प्रक्रिया अपनाते हैं ताकि आपकी वेबसाइट आपके ब्रांड और बिज़नेस गोल्स के अनुरूप पूरी तरह तैयार हो।"
      : "We follow a structured process to design, develop & launch websites that perfectly match your brand and business goals."}
  </p>
</div>

      {/* Horizontal Scrolling Cards */}
   <div className="relative py-5 w-full overflow-x-auto hide-scrollbar">
        <div className="flex gap-6 w-max animate-scroll-x">
          {combinedPoints.map((point, index) => (
            <div
              key={index}
              className="bg-gray-800/60 border border-gray-700 min-w-[260px] md:min-w-[320px] p-6 rounded-xl shadow-lg flex flex-col items-start gap-4 hover:scale-105 hover:shadow-indigo-500/50 transition-all duration-300 backdrop-blur-md"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600/20 border border-indigo-500">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                  alt="step icon"
                  className="w-6 h-6"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-indigo-400 mb-1">
                  Step {index + 1}
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  {language === "hi" ? point.hi : point.en}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {index % 2 === 0
                    ? language === "hi"
                      ? "हम सुनिश्चित करते हैं कि हर विवरण आपके विचार से मेल खाता है।"
                      : "We ensure every detail matches your idea."
                    : language === "hi"
                    ? "बेहतर यूज़र अनुभव और सहज इंटीग्रेशन।"
                    : "Seamless integration and best user experience."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional CSS for smooth scroll */}
      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-x {
          display: flex;
          animation: scroll-x 50s linear infinite;
        }

         .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
      `}</style>
    </section>

      {/* <Nav /> */}
      <div className="relative z-15">
        <Footer />
      </div>
    </>
  );
}

export default DesignPage;
