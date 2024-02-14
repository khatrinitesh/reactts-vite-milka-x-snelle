import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const LandingVideoPlayerContainer = styled.div`
  height: 380px;
  aspect-ratio: 16/9;
  border-radius: 30px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  @media screen and (max-width: 800px) {
    height: 250px;
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    height: 220px;
    width: 100%;
  }
  @media screen and (max-width: 380px) {
    height: 200px;
    width: 100%;
  }
`;
export const LandingPageVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 30px;
  border: 4px solid ${theme.bodyColor};
  box-sizing: border-box;
`;
export const LandingVideoPlayButtonContainer = styled.div<{
  isPlaying?: boolean;
}>`
  height: 100%;
  width: 100%;
  background-color: ${({ isPlaying }) =>
    isPlaying ? "rgba(0, 0, 0, 0.5)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: 4px solid ${theme.bodyColor};
  box-sizing: border-box;
`;
export const LandingVideoPlayButton = styled.div`
  height: 85px;
  width: 85px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.white};
  color: ${theme.bodyColor};
  font-size: 40px;
  @media screen and (max-width: 480px) {
    height: 70px;
    width: 70px;
    font-size: 35px;
  }
  @media screen and (max-width: 380px) {
    height: 60px;
    width: 60px;
    font-size: 30px;
  }
`;

export const CloseContainer = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 100%;
  color: #000;
  font-size: 22px;
  background-color: ${theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -5px;
  right: -5px;
  @media screen and (max-width: 480px) {
    height: 30px;
    width: 30px;
  }
`;
