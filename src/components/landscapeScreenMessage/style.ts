import styled from "styled-components";
import { theme } from "../../styles/theme";
import { opacityAnimation } from "../../styles/sharedStyle";

export const LandscapeScreenMessageLayout = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${theme.bodyColor};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${opacityAnimation} 0.3s;
`;

export const LandscapeScreenImageMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LandscapeScreenImageContainer = styled.div`
  height: 100px;
  width: 200px;
`;

export const LandscapeScreenImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const LandscapeScreenText = styled.div`
  font-size: 36px;
  font-family: SemiBoldFont;
  margin-top: 10px;
`;
