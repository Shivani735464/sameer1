import React, { useState } from 'react';
import {
  VscHome,
  VscInfo,
  VscSymbolColor,
  VscServer,
  VscGraphLine,
  VscMail,
} from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import Dock from './NavItems';
import Joyride from 'react-joyride';

function Nav() {
  const navigate = useNavigate();
  const [tourRunning, setTourRunning] = useState(true);

  const items = [
    { id: "nav-home", icon: <VscHome />, label: "Home", onClick: () => navigate("/") },
    { id: "nav-about", icon: <VscInfo />, label: "About", onClick: () => navigate("/about") },
    { id: "nav-design", icon: <VscSymbolColor />, label: "Design", onClick: () => navigate("/design") },
    { id: "nav-service", icon: <VscServer />, label: "Our Services", onClick: () => navigate("/service") },
    { id: "nav-pricing", icon: <VscGraphLine />, label: "Pricing", onClick: () => navigate("/pricing") },
    { id: "nav-contact", icon: <VscMail />, label: "Contact Us", onClick: () => navigate("/contact") },
  ];

  // Function to generate steps dynamically based on screen width
 const steps = [
   {
    target: "#whatsapp-icon",
    content: "Yahan se aap hume WhatsApp par contact kar sakte ho.",
    disableBeacon: true,
    placement: "bottom", // ya top/bottom, jo best lage
  },
  {
    target: "#language-switcher",
    content: "Yahan se aap apni language change kar sakte ho.",
    disableBeacon: true,
    placement: "bottom", // ya top/bottom, jo best lage
  },
  ...items.map(item => ({
    target: window.innerWidth < 768 ? `#mobile-${item.id}` : `#desktop-${item.id}`,
    content: `Yahan se aap ${item.label} page par ja sakte ho.`,
    disableBeacon: true,
    placement: window.innerWidth < 768 ? "top" : "bottom",
  })),
];

  // Wrap items with ID for Joyride
  const wrapItems = (prefix, size) =>
    items.map(item => ({
      ...item,
      icon: (
        <div id={`${prefix}-${item.id}`} className="inline-flex items-center justify-center w-full h-full">
          {React.cloneElement(item.icon, { size })}
        </div>
      ),
    }));

  return (
    <div>
      {/* Joyride Tour */}
      <Joyride
        steps={steps}
        run={tourRunning}
        continuous
        showSkipButton
        showProgress
        scrollToFirstStep={false}
        disableScrolling={true}
        spotlightClicks={false}
        callback={(data) => {
          if (data.status === 'finished' || data.status === 'skipped') setTourRunning(false);
        }}
      />

      {/* Desktop Dock */}
      <div className="hidden md:block fixed bottom-6 left-[280px] z-90">
        <Dock
          className="text-white bg-gray-100/60 border-none backdrop-blur-md"
          items={wrapItems("desktop", 18)}
          panelHeight={77}
          baseItemSize={60}
          magnification={90}
        />
      </div>

      {/* Mobile Dock */}
      <div className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-30">
        <Dock
          className="text-white bg-gray-100/60 border-none backdrop-blur-md"
          items={wrapItems("mobile", 18)}
          panelHeight={57}
          baseItemSize={40}
          magnification={35}
        />
      </div>
    </div>
  );
}

export default Nav;