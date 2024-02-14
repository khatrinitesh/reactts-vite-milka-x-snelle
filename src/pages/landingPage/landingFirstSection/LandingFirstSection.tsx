/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Styled from "./style";
import LandingButton from "../components/landingButton/LandingButton";
import LandingDownArrow from "../components/landingDownArrow/LandingDownArrow";
import * as SharedStyled from "../../../styles/sharedStyle";

const LandingFirstSection = ({ scrollToSection }: any) => {
  return (
    <SharedStyled.Container width="90%">
      <Styled.LandingFirstSectionMainContainer>
        <Styled.LandingFirstSectionContainer>
          <Styled.LandingFirstSectionLeftContainer>
            <Styled.LeftImageContainer>
              <Styled.ImageContainer
                src={`${import.meta.env.VITE_ASSET_URL}/img/landingLogo-v1.png`}
                alt="snelle"
              />
            </Styled.LeftImageContainer>
            <Styled.LeftDescriptionContainer>
              Milka en Snelle maken met <span>AI</span> van jouw tedere
              boodschap een gepersonaliseerde song.
              <br />
              Klaar om te delen!
            </Styled.LeftDescriptionContainer>
            <Styled.LeftLabelContainer>
              Kleine moeite, groot gebaar.
            </Styled.LeftLabelContainer>
            <Styled.LeftButtonContainer>
              <LandingButton />
            </Styled.LeftButtonContainer>
          </Styled.LandingFirstSectionLeftContainer>
          <Styled.LandingFirstSectionRightContainer>
            <Styled.ImageContainer
              src={`${import.meta.env.VITE_ASSET_URL}/img/snelle-v1.png`}
              alt="snelle"
            />
          </Styled.LandingFirstSectionRightContainer>
        </Styled.LandingFirstSectionContainer>
        <Styled.LandingFirstSectionFooter>
          <LandingDownArrow scrollToSection={scrollToSection} />
        </Styled.LandingFirstSectionFooter>
      </Styled.LandingFirstSectionMainContainer>
    </SharedStyled.Container>
  );
};

export default LandingFirstSection;
