import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";

const HomePrice = () => {
  const { language } = useLanguage();
 
  const navigate = useNavigate();

  const texts = {
    en: {
      heading: "Pricing Plans",
      subheading: "Choose the perfect plan for your business needs.",
      plans: [
        {
          name: "Starter",
          price: "599rs/mo + 199rs setup",
          description: "Affordable plan for beginners and individuals.",
          features: [
            "Responsive design",
            "Community access",
            "8GB storage",
            "Landing page",
            "Card delivery",
            "Database support",
          ],
          button: "Buy Now",
          highlight: false,
        },
        {
          name: "Business",
          price: "899rs/mo + 199rs setup",
          description: "Best for startups and small businesses.",
          features: [
            "Responsive design",
            "Community access",
            "10GB storage",
            "Card delivery",
            "Up to 5 pages website",
            "Priority support",
            "Database support",
            "E-commerce functionality",
          ],
          button: "Buy Now",
          highlight: true,
        },
        {
          name: "Pro",
          price: "Lets Talk",
          description: "Advanced features for growing companies.",
          features: [
            "Unlimited pages",
            "E-commerce functionality",
            "Custom animations & branding",
            "24/7 premium support",
            "Unlimited storage",
          ],
          button: "Contact Us",
          highlight: false,
        },
      ],
    },
    hi: {
      heading: "प्लान और कीमतें",
      subheading: "अपने बिज़नेस के लिए सही प्लान चुनें।",
      plans: [
        {
          name: "स्टार्टर",
          price: "599rs/महीना + 199rs सेटअप",
          description:
            "शुरू करने वालों और पर्सनल यूज़ के लिए सस्ता और आसान प्लान।",
          features: [
            "रिस्पॉन्सिव डिज़ाइन",
            "कम्युनिटी एक्सेस",
            "8GB स्टोरेज",
            "लैंडिंग पेज",
            "कार्ड डिलीवरी",
            "डेटाबेस सपोर्ट",
          ],
          button: "अभी खरीदें",
          highlight: false,
        },
        {
          name: "बिज़नेस",
          price: "899rs/महीना + 199 सेटअप",
          description: "स्टार्टअप और छोटे बिज़नेस के लिए बेस्ट प्लान।",
          features: [
            "रिस्पॉन्सिव डिज़ाइन",
            "कम्युनिटी एक्सेस",
            "10GB स्टोरेज",
            "कार्ड डिलीवरी",
            "5 पेज तक की वेबसाइट",
            "प्रायोरिटी सपोर्ट",
            "डेटाबेस सपोर्ट",
            "ई-कॉमर्स फीचर्स",
          ],
          button: "बिज़नेस प्लान लें",
          highlight: true,
        },
        {
          name: "प्रो",
          price: "बात करें",
          description:
            "बड़ी और बढ़ती कंपनियों के लिए एडवांस फीचर्स वाला प्लान।",
          features: [
            "अनलिमिटेड पेज",
            "ई-कॉमर्स फीचर्स",
            "कस्टम एनीमेशन और ब्रांडिंग",
            "24/7 प्रीमियम सपोर्ट",
            "अनलिमिटेड स्टोरेज",
          ],
          button: "हमसे संपर्क करें",
          highlight: false,
        },
      ],
    },
  };
   const data = texts[language];

   const handleBuy = (plan) => {
    // navigate to SecondContact and pass plan as state
    navigate("/second-contact", { state: { plan } });
  };















  
  return (
    <section className="text-white relative z-10 py-20 px-4 sm:px-6 md:px-12 min-h-screen flex flex-col justify-center">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold">
          {data.heading.split(" ")[0]}{" "}
          <span className="text-blue-300">
            {data.heading.split(" ").slice(1).join(" ")}
          </span>
        </h1>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          {data.subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {data.plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 sm:p-8 shadow-lg transform transition hover:scale-105 ${
              plan.highlight
                ? "bg-gradient-to-b from-blue-800 to-blue-900 border-2 border-blue-600"
                : "bg-gray-800"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              {plan.name}
            </h3>
            <p className="text-3xl sm:text-4xl font-extrabold mb-1 sm:mb-2">
              {plan.price}
            </p>
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
              {plan.description}
            </p>

            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm sm:text-base">
                  <span className="text-green-400 mr-2">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleBuy(plan)}
              className={`w-full py-2 sm:py-3 rounded-lg font-semibold transition text-sm sm:text-base ${
                plan.highlight
                  ? "bg-white text-blue-700 hover:bg-gray-200"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePrice;
