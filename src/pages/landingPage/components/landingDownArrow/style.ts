import styled from "styled-components";
import { bounceAnimation } from "../../../../styles/sharedStyle";

export const LandingDownArrowContainer = styled.div`
  width: 140px;
  cursor: pointer;
  animation: ${bounceAnimation} 3s ease infinite;
`;
export const LandingDownArrowImage = styled.div`
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 800px) {
    font-size: 28px;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
  @media screen and (max-width: 380px) {
    font-size: 20px;
  }
`;

export const LandingDownArrowText = styled.div`
  font-size: 16px;
  font-family: RegularFont;
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
  @media screen and (max-width: 380px) {
    font-size: 8px;
  }
`;
