import Nav from "../components/Nav";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import React, { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

function ServicePage() {
  const { language } = useLanguage();
  useEffect(() => {
    // Page load hote hi top par scroll karega
    window.scrollTo(0, 0);
  }, []);


   const text = {
  en: {
    heading33: "Transform Your Ideas Into Reality",
    description33:
      "We specialize in crafting modern, responsive, and user-friendly websites that not only look stunning but also perform seamlessly across all devices. Let’s build a digital experience that truly represents your vision.",
  },
  
  hi: {
    heading33: "अपने विचारों को वास्तविकता में बदलें",
    description33:
      "हम आधुनिक, रिस्पॉन्सिव और यूज़र-फ्रेंडली वेबसाइट बनाने में माहिर हैं, जो सुंदर दिखने के साथ-साथ सभी डिवाइस पर सहजता से काम करती हैं। चलिए एक डिजिटल अनुभव बनाते हैं जो आपके विज़न को सच में दर्शाए।",
  },
};

const cardsData = {
  en: [
    {
      title: "Responsive Websites",
      desc: "Modern, fast and responsive websites that look great on every device.",
      img: "https://cdn.pixabay.com/photo/2016/06/03/12/37/internet-search-engine-1433323_640.jpg",
    },
    {
      title: "Landing Pages",
      desc: "High-converting landing pages crafted to boost leads & sales.",
      img: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
    },
    {
      title: "E-Commerce Stores",
      desc: "Complete online stores with payment integration and order flow.",
      img: "https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849804_640.jpg",
    },
    {
      title: "Website Maintenance & Support",
      desc: "Keep your site up-to-date, backed up and secure.",
      img: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849826_640.jpg",
    },
    {
      title: "Hosting & Domains",
      desc: "Domain registration, hosting setup and one-click deployments.",
      img: "https://cdn.pixabay.com/photo/2015/03/01/11/29/mockup-654585_640.jpg",
    },
    {
      title: "Website Redesign & Optimization",
      desc: "Revamp old sites for speed, UX and SEO improvements.",
      img: "https://cdn.pixabay.com/photo/2016/10/13/16/23/genoa-1738159_640.jpg",
    },
    {
      title: "Application / Pages",
      desc: "Single-page apps, dashboards or custom feature pages.",
      img: "https://cdn.pixabay.com/photo/2016/10/13/16/26/web-agency-1738168_640.jpg",
    },
    {
      title: "Training & Handover",
      desc: "Sessions to help clients manage their site easily.",
      img: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849819_640.jpg",
    },
  ],
  hi: [
    {
      title: "रिस्पॉन्सिव वेबसाइट्स",
      desc: "आधुनिक, तेज़ और रिस्पॉन्सिव वेबसाइट्स जो हर डिवाइस पर शानदार दिखती हैं।",
      img: "https://cdn.pixabay.com/photo/2016/06/03/12/37/internet-search-engine-1433323_640.jpg",
    },
    {
      title: "लैंडिंग पेज",
      desc: "उच्च रूपांतरण वाले लैंडिंग पेज जो लीड और बिक्री बढ़ाते हैं।",
      img: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
    },
    {
      title: "ई-कॉमर्स स्टोर्स",
      desc: "पूर्ण ऑनलाइन स्टोर्स, पेमेंट इंटीग्रेशन और ऑर्डर फ्लो के साथ।",
      img: "https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849804_640.jpg",
    },
    {
      title: "वेबसाइट मेंटेनेंस और सपोर्ट",
      desc: "साइट को अपडेट, बैकअप और सुरक्षित रखें।",
      img: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849826_640.jpg",
    },
    {
      title: "होस्टिंग और डोमेन्स",
      desc: "डोमेन रजिस्ट्रेशन, होस्टिंग सेटअप और आसान डिप्लॉयमेंट।",
      img: "https://cdn.pixabay.com/photo/2015/03/01/11/29/mockup-654585_640.jpg",
    },
    {
      title: "वेबसाइट री-डिज़ाइन और ऑप्टिमाइजेशन",
      desc: "पुरानी साइट्स को स्पीड, UX और SEO के लिए रीवैंप करें।",
      img: "https://cdn.pixabay.com/photo/2016/10/13/16/23/genoa-1738159_640.jpg",
    },
    {
      title: "एप्लिकेशन / पेजेस",
      desc: "सिंगल-पेज एप्स, डैशबोर्ड या कस्टम फीचर पेज।",
      img: "https://cdn.pixabay.com/photo/2016/10/13/16/26/web-agency-1738168_640.jpg",
    },
    {
      title: "ट्रेनिंग और हैंडओवर",
      desc: "क्लाइंट्स को उनकी साइट आसानी से मैनेज करने के लिए सेशन।",
      img: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849819_640.jpg",
    },
  ],
};
  return (
    <>
      <section className="min-h-[42vh] mt-10 md:mt-0 fixed z-10 w-full flex items-center justify-center text-white px-6 py-12">
      {/* Container for text */}
      <div className="max-w-5xl text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          <span className="text-indigo-500">
            {text[language].heading33.split(" ")[2]}{" "}
          </span>
          {text[language].heading33.replace("Ideas", "").replace("Ideas", "").trim()}
        </h2>
        <p className="text-gray-300 text-base sm:text-lg lg:text-xl">
          {text[language].description33}
        </p>
      </div>
    </section>











      <ScrollStack className="max-h-[100vh] relative z-30 shadow-2xl">
        {/* Card 1 */}
        {cardsData[language].map((card, index) => (
        <ScrollStackItem key={index}>
          <div className="flex flex-col md:flex-row items-center justify-between p-6 rounded-xl bg-gray-800 md:bg-gray-700">
            {/* Left (Text) */}
            <div className="w-full text-center md:text-left p-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-100">
                {card.title}
              </h2>
              <p className="text-gray-100 text-base md:text-lg">{card.desc}</p>
            </div>
            {/* Right (Image) */}
            <div className="md:w-1/2 w-full flex justify-center p-4">
              <img
                src={card.img}
                alt={card.title}
                className="rounded-lg shadow-md w-full max-w-sm object-cover"
              />
            </div>
          </div>
        </ScrollStackItem>
      ))}
















      </ScrollStack>
      {/* <Nav /> */}
    </>
  );
}

export default ServicePage;
