import styled from "styled-components";
import { theme } from "../../styles/theme";
import { opacityAnimation } from "../../styles/sharedStyle";

export const YourCodeDesktopScreen = styled.div`
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (min-width: 480px) {
    display: block;
  }
`;
export const YourCodeMobileScreen = styled.div`
  @media screen and (max-width: 480px) {
    display: block;
  }
  @media screen and (min-width: 480px) {
    display: none;
  }
`;

export const YourCodeModalContainer = styled.div`
  background-color: ${theme.buttonColor};
  color: ${theme.white};
  padding: 40px 0;
  width: 500px;
  border-radius: 20px;
  position: relative;
  animation: ${opacityAnimation} 0.3s;
  @media screen and (max-width: 560px) {
    width: 400px;
  }
`;
export const YourCodeHorizontalLine = styled.hr`
  width: 100%;
  margin-top: 12px;
  border: 1px solid ${theme.lightBlue};
`;

export const YourCodeModalText = styled.div`
  font-size: 18px;
  font-family: RegularFont;
  color: ${theme.white};
  text-align: center;
  margin-top: 12px;
`;

export const YourCodeImageContainer = styled.div`
  height: 300px;
  width: 300px;
  margin-top: 12px;
`;

export const YourCodeImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const YourCodeTextLineWrapper = styled.div`
  padding: 0 40px;
`;

export const DownBarMainLayout = styled.div<{
  isSideBarOpen: boolean;
}>`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: ${({ isSideBarOpen }) => (isSideBarOpen ? "0%" : "-100%")};
  background-color: rgba(255, 255, 255, 0.4);
  z-index: 1000;
`;

export const YourCodeDownBarMainContainer = styled.div<{
  isSideBarOpen: boolean;
}>`
  background-color: ${theme.buttonColor};
  color: ${theme.white};
  width: 100%;
  height: 70vh;
  border-radius: 5px;
  position: absolute;
  left: 0;
  bottom: ${({ isSideBarOpen }) => (isSideBarOpen ? "0%" : "-100%")};
  transition: 420ms;
`;
export const YourCodeDownBarContainer = styled.div`
  position: relative;
  padding: 40px 0;
  box-sizing: border-box;
`;
export const YourCodeDownBarImageContainer = styled.div`
  height: 250px;
  width: 250px;
  margin-top: 12px;
`;
