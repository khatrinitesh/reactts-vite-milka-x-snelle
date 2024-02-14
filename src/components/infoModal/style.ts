import styled from "styled-components";
import { opacityAnimation } from "../../styles/sharedStyle";
import { theme } from "../../styles/theme";

export const InfoModalContainer = styled.div`
  background-color: ${theme.buttonColor};
  color: ${theme.white};
  padding: 50px 20px;
  box-sizing: border-box;
  width: 500px;
  border-radius: 10px;
  position: relative;
  animation: ${opacityAnimation} 0.3s;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const InfoModalText = styled.div`
  font-size: 18px;
  font-family: RegularFont;
  color: ${theme.white};
  text-align: center;
  margin-top: 10px;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
  @media screen and (max-width: 380px) {
    font-size: 14px;
  }
`;
