import styled from "styled-components";
import { theme } from "../../styles/theme";

export const NavbarLayout = styled.div`
  background-color: ${theme.bodyColor};
  position: sticky;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  align-items: center;
  z-index: 1000;
  @media screen and (max-width: 480px) {
    -webkit-box-shadow: -1px 17px 27px -5px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: -1px 17px 27px -5px rgba(0, 0, 0, 0.25);
    box-shadow: -1px 17px 27px -5px rgba(0, 0, 0, 0.25);
  }
`;
export const NavbarMainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  height: 80px;
  align-items: center;
`;

export const LogoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImageContainer = styled.div`
  height: 65px;
  width: 160px;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    height: 55px;
  }
`;
export const LogoImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: flex;
`;
export const HamBurgerLogoImage = styled.img`
  height: 30px;
  width: 30px;
  object-fit: contain;
  display: flex;
  @media screen and (max-width: 480px) {
    height: 25px;
    width: 25px;
  }
`;

export const UserLoginMainContainer = styled.div`
  position: relative;
`;

export const UserLoginContainer = styled.div`
  height: 55px;
  width: 55px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  background-color: ${theme.buttonColor};
  cursor: pointer;
`;

export const UserLogoutContainer = styled.div`
  height: 40px;
  background-color: ${theme.buttonColor};
  padding: 0 10px;
  border-radius: 10px;
  font-size: 20px;
  font-family: RegularFont;
  display: flex;
  align-items: center;
  position: absolute;
  top: 60px;
  left: -10px;
  cursor: pointer;
`;
