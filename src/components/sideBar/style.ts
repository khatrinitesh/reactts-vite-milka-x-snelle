import styled from "styled-components";
import { theme } from "../../styles/theme";
import { opacityAnimation } from "../../styles/sharedStyle";

export const SideBarMainContainer = styled.div<{ bgColor?: string }>`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor || "#13131d"};
  z-index: 10000;
`;
export const SideBarContainer = styled.div`
  background-color: ${theme.buttonColor};
  color: ${theme.white};
  padding: 20px;
  width: 650px;
  border-radius: 10px;
  position: relative;
  animation: ${opacityAnimation} 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const SideBarCloseContainer = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  cursor: pointer;
`;
export const CloseLogoImage = styled.img`
  height: 30px;
  width: 30px;
  object-fit: contain;
  display: flex;
  @media screen and (max-width: 480px) {
    height: 20px;
    width: 20px;
  }
`;
export const SideBarTextMainContainer = styled.div`
  width: 400px;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
export const SideBarTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${theme.lightBlue};
  height: 90px;
  &:last-child {
    border-bottom: none;
  }
  @media screen and (max-width: 480px) {
    height: 70px;
  }
`;
export const SideBarText = styled.div`
  font-size: 30px;
  font-family: RegularFont;
  color: ${theme.white};
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    color: ${theme.lightBlue};
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const SideBarInfoIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SideBarInfoIcon = styled.img`
  height: 30px;
  width: 30px;
  margin-top: 5px;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    height: 25px;
    width: 25px;
  }
`;
