import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { moveUpDown } from "../../../styles/sharedStyle";

export const LandingSecondSectionMainContainer = styled.div`
  min-height: 550px;
  background-color: ${theme.landingWhite};
  overflow: auto;
  @media screen and (max-width: 480px) {
    min-height: 460px;
  }
  @media screen and (max-width: 380px) {
    min-height: 360px;
  }
`;

export const LandingSecondSectionContainer = styled.div`
  position: relative;
`;

export const LandingSecondSectionHeadingTextWrapper = styled.div`
  margin-top: 30px;
  @media screen and (max-width: 800px) {
    margin-top: 0px;
  }
`;

export const LandingSecondSectionHeadingText = styled.div`
  font-size: 40px;
  font-family: GoBoldFont;
  color: ${theme.buttonColor};
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
  @media screen and (max-width: 380px) {
    font-size: 20px;
  }
  span {
    font-size: 70px;
    font-family: StachBoldFont;
    color: ${theme.lightBlue};
    @media screen and (max-width: 480px) {
      font-size: 50px;
    }
    @media screen and (max-width: 380px) {
      font-size: 40px;
    }
  }
`;
export const LandingSecondSectionDescription = styled.div`
  font-size: 18px;
  font-family: RegularFont;
  color: ${theme.buttonColor};
  text-align: center;
  margin-top: 25px;
  position: relative;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
  @media screen and (max-width: 380px) {
    font-size: 12px;
  }
  span {
    font-family: SemiBoldFont;
  }
`;

export const ChocolateImageDesktopContainer = styled.div`
  height: 80px;
  width: 400px;
  margin: 0 auto;
  margin-top: 25px;
  animation: ${moveUpDown} 4s infinite;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export const ChocolateImageContainer = styled.div`
  position: absolute;
  top: -20px;
  left: 0px;
  animation: ${moveUpDown} 4s infinite;
  width: 500px;
  @media screen and (max-width: 1390px) {
    width: 400px;
  }
  @media screen and (max-width: 1200px) {
    width: 230px;
  }
  @media screen and (max-width: 940px) {
    width: 140px;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
  @media screen and (min-width: 800px) {
    display: block;
  }
`;

export const ChocolateImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
