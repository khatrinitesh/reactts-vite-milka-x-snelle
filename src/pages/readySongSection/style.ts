import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ReadySongMainContainer = styled.div`
  min-height: 80vh;
  @media screen and (max-width: 800px) {
    margin: 10px 0;
  }
`;

export const ReadySongContainer = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  min-height: 80vh;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const ReadySongLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ReadySongRightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    margin: 5px 0;
  }
`;

export const VideoAspectRatioContainer = styled.div`
  width: 320px;
  aspect-ratio: 9/16;
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  position: relative;
  @media screen and (max-width: 480px) {
    width: 265px;
  }
  @media screen and (max-width: 380px) {
    width: 255px;
  }
`;

export const ReadySongHeadingText = styled.div`
  font-size: 62px;
  color: ${theme.white};
  font-family: SemiBoldFont;
  text-align: center;
  @media screen and (max-width: 1200px) {
    font-size: 52px;
  }
  @media screen and (max-width: 980px) {
    font-size: 42px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  @media screen and (max-width: 380px) {
    font-size: 28px;
  }
`;

export const ReadySongButtonText = styled.div`
  font-size: 18px;
  color: ${theme.white};
  font-family: SemiBoldFont;
  margin-top: 10px;
  text-align: center;
`;

export const ReadySongButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 150px 150px;
  grid-gap: 10px;
  margin-top: 16px;
  justify-content: center;
  @media screen and (max-width: 380px) {
    grid-template-columns: 130px 130px;
  }
`;

export const ReadySongButton = styled.button`
  height: 40px;
  width: 100%;
  outline: none;
  border: 1px solid ${theme.white};
  font-size: 16px;
  font-family: SemiBoldFont;
  background-color: transparent;
  color: ${theme.white};
  border-radius: 10px;
  cursor: pointer;
`;
export const LoadingContainer = styled.span`
  display: inline-block;
  height: 100%;
  width: 90px;
`;

export const VideoOuterLayerWrapper = styled.div`
  /* height: 100%;
  width: 100%;
  display: none; */
`;

export const VideoOuterLayerContainer = styled.div<{ isPlaying?: boolean }>`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.3);
  background-color: ${({ isPlaying }) =>
    isPlaying ? "rgba(0, 0, 0, 0.3)" : "none"};
  border-radius: 20px;
  cursor: pointer;
  /* &:hover ${VideoOuterLayerWrapper} {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.4);
    transition: all 0.3s linear;
    border-radius: 10px;
  } */
`;
export const VideoOuterLayerIconContainer = styled.div``;

export const ReadySongVideo = styled.video`
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

export const ReadySongButtonMobileWrapper = styled.div`
  @media screen and (min-width: 800px) {
    display: none;
  }
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const ReadySongButtonDesktopWrapper = styled.div`
  @media screen and (min-width: 800px) {
    display: block;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
