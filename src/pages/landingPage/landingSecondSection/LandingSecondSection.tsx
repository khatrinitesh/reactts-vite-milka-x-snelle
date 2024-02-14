/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Styled from "./style";
import * as SharedStyled from "../../../styles/sharedStyle";

const LandingSecondSection = ({ sectionRef }: any) => {
  return (
    <Styled.LandingSecondSectionMainContainer>
      <SharedStyled.Container width="90%">
        <Styled.LandingSecondSectionContainer>
          <Styled.ChocolateImageDesktopContainer>
            <Styled.ChocolateImage
              src={`${import.meta.env.VITE_ASSET_URL}/img/chocolate-v1.png`}
              alt="chocolate"
            />
          </Styled.ChocolateImageDesktopContainer>
          <Styled.LandingSecondSectionHeadingTextWrapper>
            <Styled.LandingSecondSectionHeadingText>
              DEEL JOUW <span>Tedere</span>
            </Styled.LandingSecondSectionHeadingText>
            <Styled.LandingSecondSectionHeadingText ref={sectionRef}>
              BOODSCHAP ALS SONG VAN SNELLE
            </Styled.LandingSecondSectionHeadingText>
          </Styled.LandingSecondSectionHeadingTextWrapper>
          <Styled.LandingSecondSectionDescription>
            Wil je iemand iets liefs vertellen, maar kom je maar niet op
            <br /> de woorden? <span>Dan is dit je kans!</span>
            <Styled.ChocolateImageContainer>
              <Styled.ChocolateImage
                src={`${import.meta.env.VITE_ASSET_URL}/img/chocolate-v1.png`}
                alt="chocolate"
              />
            </Styled.ChocolateImageContainer>
          </Styled.LandingSecondSectionDescription>
        </Styled.LandingSecondSectionContainer>
      </SharedStyled.Container>
    </Styled.LandingSecondSectionMainContainer>
  );
};

export default LandingSecondSection;
