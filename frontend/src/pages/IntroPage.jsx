import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const IntroPage = () => {
  const containerRef = useRef(null);
  const wRef = useRef(null);
  const webvRef = useRef(null);
  const subtitleRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setVisible(false), // animation ke baad hide
    });

    // Step 1: W ka scale animation (appear instantly, smooth)
    tl.fromTo(
      wRef.current,
      { scale: 0 },
      { scale: 1.3, duration: 1, ease: "power3.out" }
    );

    // Step 2: WEB_V text fade & slight move inside W
    tl.fromTo(
      webvRef.current,
      { opacity: 0, y: 5 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.6" // overlapping for smooth flow
    );

    // Step 3: Subtitle fade-in
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 5 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.7"
    );

    // Step 4: Container fade-out at the end
    tl.to(containerRef.current, { opacity: 0, duration: 0.8, delay: 0.7 });
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden flex flex-col justify-center items-center bg-black z-[9999]"
      style={{ fontFamily: "'Rajdhani', sans-serif" }}
    >
      {/* Large W */}
      <h1
        ref={wRef}
        className="text-indigo-500 text-9xl font-extrabold relative"
      >
        W
        {/* WEB_V inside W */}
        <span
          ref={webvRef}
          className="absolute inset-0 flex justify-center items-center text-white text-4xl md:text-6xl font-bold tracking-wider"
        >
          WEB_V
        </span>
      </h1>

      {/* Subtitle */}
      <p
        ref={subtitleRef}
        className="text-gray-400 text-lg md:text-2xl mt-2"
      >
        Creative Digital Experience
      </p>
    </div>
  );
};

export default IntroPage;