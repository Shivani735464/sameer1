import React, { useEffect } from "react";
import Footer from "./footer";
import HeroContace from "./HeroContace";

function ContactUsPage() {
  useEffect(() => {
    // Page load hote hi top par scroll karega
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="relative z-10 mt-20">
        <HeroContace />
      </div>

      <div className="relative z-15">
        <Footer />
      </div>
    </>
  );
}

export default ContactUsPage;
