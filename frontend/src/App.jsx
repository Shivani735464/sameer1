import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./pages/HeroSection";
import LightRays from "./components/LightRays";
import LogoLoop from "./components/LogoLoop";
import HeroResentWork from "./pages/HeroResentWork";
import HomeVision from "./pages/HomeVision";
import HomePrice from "./pages/HomePrice";
import HeroContact from "./pages/HeroContace";
import Footer from "./pages/footer";
import logo from "./assets/webv.png";
import HomeReviews from "./pages/HomeReviews";

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiBootstrap,
  SiFigma,
} from "react-icons/si";
import AboutPage from "./pages/AboutPage";
import DesignPage from "./pages/DesignPage";
import ServicePage from "./pages/ServicePage";
import PricingPage from "./pages/PricingPage";
import ContactUsPage from "./pages/ContactUsPage";
import StickerPeel from "./components/StickerPeel";
import Hyperspeed from "./components/Hyperspeed";
import WhatsAppButton from "./components/WhatsAppButton";
import UserList from "./pages/UserList";

// 🟢 Language Context Import
import { LanguageProvider } from "./context/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Nav from "./components/Nav";
import IntroPage from "./pages/IntroPage";
import SecondContact from "./pages/SecondContact";
import SecondUserList from "./pages/SecondUserList";
import ProtectedRoute from "./components/ProtectedRoute";
// import IntroPage from "./pages/IntroPage";

function App() {
  //  const [introFinished, setIntroFinished] = useState(false);
  useEffect(() => {
    // Page load hote hi top par scroll karega
    window.scrollTo(0, 0);
  }, []);

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
    {
      node: <SiBootstrap />,
      title: "Bootstrap",
      href: "https://getbootstrap.com",
    },
    { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
    {
      node: <SiJavascript />,
      title: "JavaScript",
      href: "https://developer.mozilla.org/docs/Web/JavaScript",
    },
  ];

  return (
    <LanguageProvider>
      <IntroPage />
      <Router>
        {/* 🔹 Background Effects */}
        <LightRays
          raysOrigin="top-center"
          raysColor="#00FFFF"
          raysSpeed={1.5}
          lightSpread={3}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays fixed top-0 left-0"
        />

        <div className="fixed top-0 w-full h-[100vh] z-10">
          <Hyperspeed
            effectOptions={{
              distortion: "turbulentDistortion",
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xffffff,
                brokenLines: 0xffffff,
                leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                sticks: 0x03b3c3,
              },
            }}
          />
        </div>

        <StickerPeel
          imageSrc={logo}
          width={200}
          rotate={0}
          shadowIntensity={0.6}
          className="z-30 fixed left-6 top-7"
        />

        {/* 🔹 Language Switcher Button (Top-Right Corner) */}
        <div className="fixed top-6 right-6 z-40">
          <LanguageSwitcher />
        </div>

        {/* 🔹 Routes */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div>
                <HeroSection />
                <div className="absolute z-10 h-[100vh] p-0 w-[100vw]">
                  <div
                    style={{
                      height: "200px",
                      width: "100%",
                      position: "relative",
                      overflow: "hidden",
                      color: "white",
                    }}
                  >
                    <LogoLoop
                      logos={techLogos}
                      speed={120}
                      direction="left"
                      logoHeight={100}
                      gap={40}
                      pauseOnHover
                      scaleOnHover
                      ariaLabel="Technology partners"
                      className="mt-12"
                    />
                  </div>
                  <WhatsAppButton />
                  <HeroResentWork />
                  <HomeVision />
                  <HomeReviews />
                  <HomePrice />
                  <HeroContact />
                  <Footer />
                </div>
              </div>
            }
          />

          {/* Other Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route
  path="/userlist"
  element={
    <ProtectedRoute>
      <UserList />
    </ProtectedRoute>
  }
/>

<Route
  path="/seconduserlist"
  element={
    <ProtectedRoute>
      <SecondUserList />
    </ProtectedRoute>
  }
/>
          <Route path="/second-contact" element={<SecondContact />} />
        </Routes>
        <Nav />
      </Router>
    </LanguageProvider>
  );
}

export default App;
