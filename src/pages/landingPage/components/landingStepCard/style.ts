import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const LandingStepCardGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 10px;
  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

export const LandingStepCardContainer = styled.div`
  overflow: auto;
`;

export const LandingStepCardCountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
`;

export const LandingStepCardCount = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-family: SemiBoldFont;
  background-color: ${theme.bodyColor};
  color: ${theme.white};
  -webkit-box-shadow: 7px 10px 13px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 7px 10px 13px -9px rgba(0, 0, 0, 0.75);
  box-shadow: 7px 10px 13px -9px rgba(0, 0, 0, 0.75);
  @media screen and (max-width: 1080px) {
    height: 50px;
    width: 50px;
    font-size: 32px;
  }
`;
export const LandingStepCardText = styled.div`
  font-size: 24px;
  font-family: RegularFont;
  text-align: center;
  @media screen and (max-width: 1080px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
  @media screen and (max-width: 380px) {
    font-size: 12px;
  }
`;
