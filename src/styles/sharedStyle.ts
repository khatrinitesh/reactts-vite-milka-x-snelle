import { keyframes, styled } from "styled-components";
import { theme } from "./theme";

export const Container = styled.div<{ width: string }>`
  position: relative;
  width: ${({ width }) => (width ? width : "100%")};
  padding-right: var(1.5rem, 0.75rem);
  padding-left: var(1.5rem, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 90%;
  }
  @media (min-width: 768px) {
    max-width: 90%;
  }
  @media (min-width: 992px) {
    max-width: 90%;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

export const opacityAnimation = keyframes`
0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px); /* Adjust the value for the desired movement */
  }
`;

export const OpacityAnimation = styled.div`
  animation: ${opacityAnimation} 1s;
`;

export const ErrorMessageText = styled.div`
  color: ${theme.errorText};
  font-size: 14px;
  font-family: SemiBoldFont;
  margin-top: 3px;
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const IconOuterWrapper = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 8px;
  background-color: ${theme.buttonColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    height: 45px;
    width: 45px;
  }
`;

export const IconModalOuterMainWrapper = styled.div<{ marginTop?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ marginTop }) => marginTop || "25px"};
  @media screen and (max-width: 480px) {
    margin-top: ${({ marginTop }) => marginTop || "20px"};
  }
  @media screen and (max-width: 380px) {
    margin-top: ${({ marginTop }) => marginTop || "14px"};
  }
`;

export const IconModalOuterWrapper = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 100%;
  background-color: ${theme.lightBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    height: 60px;
    width: 60px;
  }
`;

export const ModalWrapper = styled.div`
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalDescription = styled.div`
  font-size: 24px;
  font-family: SemiBoldFont;
  color: ${theme.white};
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
  @media screen and (max-width: 380px) {
    font-size: 16px;
  }
`;

export const HeadingText = styled.div`
  font-size: 32px;
  color: ${theme.white};
  font-family: SemiBoldFont;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
  @media screen and (max-width: 380px) {
    font-size: 24px;
  }
`;

export const SongLyricsText = styled.div<{ marginTop?: string }>`
  font-size: 16px;
  font-family: RegularFont;
  color: ${theme.white};
  margin-top: ${({ marginTop }) => marginTop || "25px"};
  text-align: center;
  span {
    text-decoration: underline;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const SharedModalContainer = styled.div<{ padding?: string }>`
  background-color: ${theme.buttonColor};
  color: ${theme.white};
  padding: ${({ padding }) => padding || "50px"};
  box-sizing: border-box;
  width: 475px;
  border-radius: 10px;
  position: relative;
  animation: ${opacityAnimation} 0.3s;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const CloseWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const CloseIcon = styled.img`
  height: 25px;
  width: 25px;
  object-fit: contain;
  display: flex;
`;

export const LandscapeScreen = styled.div`
  display: none;
  @media screen and (min-aspect-ratio: 13/9) and (max-height: 450px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  padding-top: 80px;
`;

export const StyledHyperLink = styled.a`
  text-decoration: none;
  color: ${theme.white};
`;
