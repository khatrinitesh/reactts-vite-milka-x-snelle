import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const LandingThirdSectionMainContainer = styled.div`
  min-height: 500px;
  background-color: ${theme.buttonColor};
  @media screen and (max-width: 480px) {
    min-height: 300px;
  }
  @media screen and (max-width: 380px) {
    min-height: 270px;
  }
`;

export const LandingThirdSectionContainer = styled.div`
  min-height: 500px;
  background-color: ${theme.buttonColor};
  @media screen and (max-width: 480px) {
    min-height: 300px;
  }
  @media screen and (max-width: 380px) {
    min-height: 270px;
  }
  /* min-height: calc(100vh - 80px); */
`;

export const LandingThirdSectionTextWrapper = styled.div`
  transform: translateY(-30%);
  @media screen and (max-width: 800px) {
    transform: translateY(-10%);
  }
`;

export const VideoPlayerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
`;

export const LandingThirdSectionTextMainContainer = styled.div`
  margin-top: 14px;
`;

export const LandingThirdSectionTextContainer = styled.div`
  font-size: 22px;
  font-family: RegularFont;
  text-align: center;
  color: ${theme.white};
  @media screen and (max-width: 1080px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
  @media screen and (max-width: 380px) {
    font-size: 12px;
  }
  span {
    font-family: SemiBoldFont;
    color: ${theme.lightBlue};
  }
`;

export const LandingThirdSectionCardGridMainContainer = styled.div`
  margin-top: 14px;
`;

export const LandingThirdSectionButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 350px;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
