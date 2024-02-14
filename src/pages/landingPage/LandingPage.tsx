/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import * as SharedStyled from "../../styles/sharedStyle";
import LandingFirstSection from "./landingFirstSection/LandingFirstSection";
import LandingFourthSection from "./landingFourthSection/LandingFourthSection";
import LandingSecondSection from "./landingSecondSection/LandingSecondSection";
import LandingThirdSection from "./landingThirdSection/LandingThirdSection";

const LandingPage = () => {
  const sectionRef = useRef<any>(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      scrollToSection();
    }, 2000);

    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <SharedStyled.OpacityAnimation>
      <SharedStyled.Wrapper>
        <LandingFirstSection scrollToSection={scrollToSection} />
        <LandingSecondSection sectionRef={sectionRef} />
        <LandingThirdSection />
        <LandingFourthSection />
      </SharedStyled.Wrapper>
    </SharedStyled.OpacityAnimation>
  );
};

export default LandingPage;
