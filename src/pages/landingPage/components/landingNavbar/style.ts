import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const LandingNavbarLayout = styled.div`
  background-color: ${theme.bodyColor};
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  align-items: center;
  z-index: 1000;
  -webkit-box-shadow: -1px 17px 27px -5px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: -1px 17px 27px -5px rgba(0, 0, 0, 0.31);
  box-shadow: -1px 17px 27px -5px rgba(0, 0, 0, 0.31);
`;
export const LandingNavbarMainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  height: 80px;
  align-items: center;
`;

export const LandingLogoContainer = styled.div`
  height: 65px;
  width: 200px;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    height: 55px;
    width: 160px;
  }
`;

export const LandingLogo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: flex;
`;
export const LandingNavbarText = styled.div`
  font-size: 20px;
  font-family: RegularFont;
  color: ${theme.white};
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
  @media screen and (max-width: 380px) {
    font-size: 16px;
  }
`;
