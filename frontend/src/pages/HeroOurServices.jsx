import StarBorder from "../components/StarBorder";
import SpotlightCard from "../components/SpotlightCard";
import React from "react";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaTools,
  FaServer,
  FaSyncAlt,
  FaMobileAlt,
  FaFileAlt,
  FaUserTie,
  FaChalkboardTeacher,
  FaPalette,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext"; // ✅ Import Language Context

export default function HeroOurServices() {
  const { language } = useLanguage();

  const servicesText = {
    en: {
      heroHeading: "Our Services",
      heroDesc:
        "We provide affordable and professional web solutions — from simple landing pages to full e-commerce stores, hosting, redesigns and ongoing support. Choose the service you need and get a free quote.",
      services: [
        {
          id: "responsive",
          icon: <FaLaptopCode className="text-4xl" />,
          title: "Responsive Websites",
          desc: "Modern, fast and responsive websites that look great on every device.",
          bullets: ["Mobile-first design", "Fast performance", "Cross-browser tested"],
        },
        {
          id: "landing",
          icon: <FaFileAlt className="text-4xl" />,
          title: "Landing Pages",
          desc: "High-converting landing pages crafted to boost leads & sales.",
          bullets: ["Conversion-focused", "A/B friendly", "Quick turnaround"],
        },
        {
          id: "ecommerce",
          icon: <FaShoppingCart className="text-4xl" />,
          title: "E-Commerce Stores",
          desc: "Complete online stores with payment integration and order flow.",
          bullets: ["Product management", "Secure payments", "Order handling"],
        },
        {
          id: "maintenance",
          icon: <FaTools className="text-4xl" />,
          title: "Website Maintenance & Support",
          desc: "Keep your site up-to-date, backed up and secure.",
          bullets: ["Updates & backups", "Security checks", "Priority fixes"],
        },
        {
          id: "hosting",
          icon: <FaServer className="text-4xl" />,
          title: "Hosting & Domains",
          desc: "Domain registration, hosting setup and one-click deployments.",
          bullets: ["Domain setup", "Shared/Cloud hosting", "Deploy & monitor"],
        },
        {
          id: "redesign",
          icon: <FaSyncAlt className="text-4xl" />,
          title: "Website Redesign & Optimization",
          desc: "Revamp old sites for speed, UX and SEO improvements.",
          bullets: ["Performance audit", "UI refresh", "SEO basics"],
        },
        {
          id: "apps",
          icon: <FaMobileAlt className="text-4xl" />,
          title: "Application / Pages",
          desc: "Single-page apps, dashboards or custom feature pages.",
          bullets: ["SPA/MPA", "API integration", "Auth & roles"],
        },
        {
          id: "training",
          icon: <FaChalkboardTeacher className="text-4xl" />,
          title: "Training & Handover",
          desc: "Handover sessions to help clients manage their site easily.",
          bullets: ["1–2 hour training", "Documentation", "Follow-up support"],
        },
        {
          id: "branding",
          icon: <FaPalette className="text-4xl" />,
          title: "Branding Essentials",
          desc: "Logo, color palette and simple brand guide for consistent look.",
          bullets: ["Logo design", "Colors & typography", "Brand assets"],
        },
      ],
      packageHeading: "Want a package that fits your budget?",
      packageDesc:
        "Pick a Basic, Standard or Premium plan — or contact us for a custom quote. We deliver fast and provide post-launch support so you stay worry-free.",
      howWeWork: [
        { title: "Discover", desc: "Understand needs & goals" },
        { title: "Design", desc: "Mockups & feedback" },
        { title: "Develop", desc: "Build, test & optimize" },
        { title: "Launch", desc: "Deploy & handover" },
      ],
      quoteBtn: "Get a Free Quote",
    },
    hi: {
    heroHeading: "हमारी सेवाएँ",
    heroDesc:
      "हम आपके लिए सस्ती और प्रोफेशनल वेब सर्विस देते हैं — चाहे सिंपल लैंडिंग पेज हो या पूरा ई-कॉमर्स स्टोर, होस्टिंग, रीडिज़ाइन या लगातार सपोर्ट। बस अपनी ज़रूरत की सर्विस चुनें और फ्री कोट पाएं।",
    services: [
      {
        id: "responsive",
        icon: <FaLaptopCode className="text-4xl" />,
        title: "रिस्पॉन्सिव वेबसाइट्स",
        desc: "मॉडर्न, तेज़ और ऐसी वेबसाइट्स जो हर डिवाइस पर बढ़िया दिखें।",
        bullets: ["मोबाइल-फर्स्ट डिज़ाइन", "तेज़ स्पीड", "हर ब्राउज़र पर कामयाब"],
      },
      {
        id: "landing",
        icon: <FaFileAlt className="text-4xl" />,
        title: "लैंडिंग पेज",
        desc: "ऐसे पेज जो लीड और सेल्स बढ़ाने में मदद करें।",
        bullets: ["कन्वर्ज़न पर फोकस", "A/B टेस्टिंग फ्रेंडली", "जल्दी डिलीवरी"],
      },
      {
        id: "ecommerce",
        icon: <FaShoppingCart className="text-4xl" />,
        title: "ई-कॉमर्स स्टोर्स",
        desc: "पेमेंट और ऑर्डर सिस्टम के साथ पूरे ऑनलाइन स्टोर।",
        bullets: ["प्रोडक्ट मैनेजमेंट", "सिक्योर पेमेंट", "ऑर्डर हैंडलिंग"],
      },
      {
        id: "maintenance",
        icon: <FaTools className="text-4xl" />,
        title: "मेंटेनेंस और सपोर्ट",
        desc: "आपकी साइट हमेशा अपडेटेड और सिक्योर रहे।",
        bullets: ["अपडेट्स और बैकअप", "सिक्योरिटी चेक", "फास्ट फिक्स"],
      },
      {
        id: "hosting",
        icon: <FaServer className="text-4xl" />,
        title: "होस्टिंग और डोमेन",
        desc: "डोमेन रजिस्ट्रेशन और होस्टिंग सेटअप सब कुछ एक जगह।",
        bullets: ["डोमेन सेटअप", "शेयर/क्लाउड होस्टिंग", "आसानी से डिप्लॉय"],
      },
      {
        id: "redesign",
        icon: <FaSyncAlt className="text-4xl" />,
        title: "रीडिज़ाइन और ऑप्टिमाइज़ेशन",
        desc: "पुरानी साइट को तेज़ और बेहतर UX/SEO के साथ नया रूप दें।",
        bullets: ["स्पीड चेक", "UI रिफ्रेश", "बेसिक SEO"],
      },
      {
        id: "apps",
        icon: <FaMobileAlt className="text-4xl" />,
        title: "ऐप्स / पेजेस",
        desc: "सिंगल-पेज ऐप्स, डैशबोर्ड या कस्टम पेज बनाएं।",
        bullets: ["SPA/MPA", "API इंटीग्रेशन", "लॉगिन और रोल्स"],
      },
      {
        id: "training",
        icon: <FaChalkboardTeacher className="text-4xl" />,
        title: "ट्रेनिंग और हैंडओवर",
        desc: "ताकि आप खुद आसानी से अपनी साइट चला सकें।",
        bullets: ["1–2 घंटे ट्रेनिंग", "डॉक्यूमेंटेशन", "फॉलो-अप सपोर्ट"],
      },
      {
        id: "branding",
        icon: <FaPalette className="text-4xl" />,
        title: "ब्रांडिंग ज़रूरी चीज़ें",
        desc: "लोगो, कलर पैलेट और बेसिक ब्रांड गाइड।",
        bullets: ["लोगो डिज़ाइन", "कलर्स और फॉन्ट्स", "ब्रांड एसेट्स"],
      },
    ],
    packageHeading: "क्या आपको अपने बजट का पैकेज चाहिए?",
    packageDesc:
      "बेसिक, स्टैंडर्ड या प्रीमियम प्लान चुनें — या हमसे कस्टम कोट के लिए बात करें। हम जल्दी डिलीवर करते हैं और बाद में भी सपोर्ट देते हैं ताकि आप टेंशन-फ्री रहें।",
    howWeWork: [
      { title: "डिस्कवर", desc: "आपकी ज़रूरत और गोल समझना" },
      { title: "डिज़ाइन", desc: "मॉकअप बनाना और फीडबैक लेना" },
      { title: "डेवलप", desc: "बिल्ड, टेस्ट और सुधार करना" },
      { title: "लॉन्च", desc: "डिप्लॉय करना और हैंडओवर देना" },
    ],
    quoteBtn: "फ्री कोट पाएं",
  },
  };

  const data = servicesText[language];

  function ServiceCard({ icon, title, desc, bullets }) {
    return (
      <article className="bg-gradient-to-b from-white/3 to-white/2 border border-white/5 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-blue-400/10 rounded-lg text-blue-300">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-gray-300 mb-4">{desc}</p>
        <ul className="text-xs text-gray-400 space-y-2 mb-4">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-blue-300 rounded-full" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </article>
    );
  }

  return (
    <div className="min-h-screen text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[90vw] mx-auto">
        {/* Hero */}
        <header className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl relative z-10 sm:text-4xl md:text-5xl font-bold">
            {data.heroHeading.split(" ")[0]} <span className="text-blue-300">{data.heroHeading.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="mt-3 relative z-10 sm:mt-4 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {data.heroDesc}
          </p>
        </header>

        {/* Services Grid */}
        <section className="grid relative z-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {data.services.map((s) => (
            <SpotlightCard
              key={s.id}
              className="custom-spotlight-card relative z-10"
              spotlightColor="rgba(135, 206, 235, 0.4)"
            >
              <ServiceCard icon={s.icon} title={s.title} desc={s.desc} bullets={s.bullets} />
            </SpotlightCard>
          ))}
        </section>

        {/* Packages / CTA */}
        <section className="bg-gradient-to-r relative z-10 from-white/5 to-white/10 rounded-2xl p-6 sm:p-8 border border-white/10 mb-10 sm:mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl relative z-10 sm:text-2xl font-bold">{data.packageHeading}</h2>
              <p className="text-gray-300 relative z-10 mt-2 text-sm sm:text-base max-w-xl leading-relaxed">{data.packageDesc}</p>
            </div>

            <div className="flex gap-3 w-full md:w-auto">
              <a
                href="/contact"
                className="flex-1 relative z-10 md:flex-none text-center px-5 py-3 bg-blue-300 text-gray-900 font-semibold rounded-md shadow-sm hover:scale-[1.02] transition-transform"
              >
                {data.quoteBtn}
              </a>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="mb-16 sm:mb-20">
          <h3 className="text-xl relative z-10 sm:text-2xl font-bold mb-4 text-center sm:text-left">
            {language === "en" ? "How we work" : "हम कैसे काम करते हैं"}
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
            {data.howWeWork.map((step, idx) => (
              <StarBorder key={idx} className="relative z-10 custom-class" color="cyan" speed="5s">
                <div className="p-4 sm:p-5 border-4 border-white/5 rounded-lg text-center">
                  <div className="font-semibold mb-2">{step.title}</div>
                  <div className="text-xs sm:text-sm">{step.desc}</div>
                </div>
              </StarBorder>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}