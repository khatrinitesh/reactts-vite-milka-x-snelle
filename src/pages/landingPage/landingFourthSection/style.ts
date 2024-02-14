import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { moveUpDown } from "../../../styles/sharedStyle";
import { Link } from "react-router-dom";

export const LandingFourthSectionMainContainer = styled.div`
  min-height: calc(100vh - 80px);
  background-color: ${theme.landingWhite};
  @media screen and (max-width: 1200px) {
    min-height: 500px;
  }
`;

export const LandingFourthSectionContainer = styled.div`
  position: relative;
  min-height: calc(100vh - 80px);
  @media screen and (max-width: 1200px) {
    min-height: 500px;
  }
`;

export const LandingFourthSectionLogoMainContainer = styled.div`
  height: 100px;
  display: grid;
  align-items: center;
  position: relative;
`;

export const LandingFourthSectionLogoContainer = styled.div`
  height: 80px;
  width: 150px;
  @media screen and (max-width: 480px) {
    height: 50px;
    width: 100px;
  }
`;
export const LandingFourthSectionLogo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: flex;
`;

export const LandingFourthSectionChocolateWrapper = styled.div`
  position: absolute;
  top: -50px;
  right: 0px;
  animation: ${moveUpDown} 4s infinite;
  width: 500px;
  height: 150px;
  @media screen and (max-width: 800px) {
    width: 300px;
    top: -50px;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
    height: 100px;
    top: -35px;
  }
`;

export const LandingFourthSectionFooterTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LandingFourthSectionFooterTextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

export const LandingFourthSectionFooterText = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-family: RegularFont;
  color: ${theme.bodyColor};
  border-right: 1px solid ${theme.bodyColor};
  padding: 0 10px;
  cursor: pointer;
  @media screen and (max-width: 380px) {
    font-size: 14px;
  }
  &:last-child {
    border-right: none;
  }
`;

export const LandingFourthSectionFooterImageContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 100%;
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (min-width: 480px) {
    display: block;
  }
`;
export const LandingFourthSectionFooterImageMobileContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0px;
  @media screen and (max-width: 480px) {
    display: block;
  }
  @media screen and (min-width: 480px) {
    display: none;
  }
`;

export const LandingFourthSectionFooterLogoWrapper = styled.div`
  position: absolute;
  bottom: 35px;
  right: 50px;
`;

export const LandingFourthSectionFooterLogoContainer = styled.div`
  height: 40px;
  width: 160px;
  @media screen and (max-width: 800px) {
    height: 30px;
    width: 120px;
  }
`;

export const LandingFourthSectionFooterLogoText = styled.div`
  font-size: 10px;
  font-family: GoBoldFont;
  margin-top: 12px;
  @media screen and (max-width: 800px) {
    font-size: 8px;
    margin-top: 10px;
  }
`;
