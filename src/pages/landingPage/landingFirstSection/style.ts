import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const LandingFirstSectionMainContainer = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  height: calc(100svh - 80px);
`;

export const LandingFirstSectionContainer = styled.div`
  height: calc(100vh - 80px);
  height: calc(100svh - 80px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 8px;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 50% 50%;
    grid-gap: 0px;
  }
`;

export const LandingFirstSectionLeftContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 50px;
  @media screen and (max-width: 1024px) {
    padding: 0px 0px;
  }
  @media screen and (max-width: 380px) {
    padding: 5px 0px;
    box-sizing: border-box;
  }
`;

export const LeftImageContainer = styled.div`
  height: 40vh;
  width: 100%;
  @media screen and (max-width: 800px) {
    height: 150px;
    margin-top: 10px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 480px) {
    height: 130px;
    margin-top: 0;
  }
  @media screen and (max-width: 380px) {
    height: 75px;
  }
`;

export const LeftLabelContainer = styled.div`
  font-size: 20px;
  font-family: SemiBoldFont;
  color: ${theme.lightBlue};
  margin-top: 10px;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 16px;
    margin-top: 0px;
  }
  @media screen and (max-width: 380px) {
    font-size: 14px;
  }
  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`;

export const LeftDescriptionContainer = styled.div`
  font-size: 18px;
  font-family: RegularFont;
  color: ${theme.white};
  text-align: center;
  margin-top: 10px;
  @media screen and (max-width: 480px) {
    font-size: 14px;
    margin-top: 0px;
  }
  @media screen and (max-width: 380px) {
    font-size: 12px;
  }
  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
  span {
    font-family: SemiBoldFont;
  }
`;

export const LeftButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 350px;
  justify-content: center;
  margin-top: 20px;
  @media screen and (max-width: 800px) {
    margin-top: 0px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const LandingFirstSectionRightContainer = styled.div`
  width: 100%;
  height: 75vh;
  @media screen and (max-width: 800px) {
    height: 100%;
  }
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const LandingFirstSectionFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
