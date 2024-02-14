/* eslint-disable @typescript-eslint/no-explicit-any */
import * as SharedStyled from "../../../styles/sharedStyle";
import LandingButton from "../components/landingButton/LandingButton";
import LandingStepCard from "../components/landingStepCard/LandingStepCard";
import LandingVideoPlayer from "../components/landingVideoPlayer/LandingVideoPlayer";
import * as Styled from "./style";

const LandingThirdSection = () => {
  return (
    <Styled.LandingThirdSectionMainContainer>
      <SharedStyled.Container width="90%">
        <Styled.LandingThirdSectionContainer>
          <Styled.VideoPlayerContainer>
            <LandingVideoPlayer />
          </Styled.VideoPlayerContainer>
          <Styled.LandingThirdSectionTextWrapper>
            <Styled.LandingThirdSectionTextMainContainer>
              <Styled.LandingThirdSectionTextContainer>
                Laat Snelle je helpen. Dan maakt Snelle er samen met
              </Styled.LandingThirdSectionTextContainer>
              <Styled.LandingThirdSectionTextContainer>
                <span>Milka</span> en <span>AI</span> een liedje van dat jij kan
                delen. Zo werkt het:
              </Styled.LandingThirdSectionTextContainer>
            </Styled.LandingThirdSectionTextMainContainer>

            <Styled.LandingThirdSectionCardGridMainContainer>
              <LandingStepCard />
            </Styled.LandingThirdSectionCardGridMainContainer>
            <Styled.LandingThirdSectionButtonContainer>
              <LandingButton />
            </Styled.LandingThirdSectionButtonContainer>
          </Styled.LandingThirdSectionTextWrapper>
        </Styled.LandingThirdSectionContainer>
      </SharedStyled.Container>
    </Styled.LandingThirdSectionMainContainer>
  );
};

export default LandingThirdSection;
