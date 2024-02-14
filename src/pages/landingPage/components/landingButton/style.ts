import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const LandingButtonContainer = styled.button`
  height: 60px;
  width: 100%;
  outline: none;
  border: none;
  font-size: 32px;
  font-family: GoBoldFont;
  border-radius: 30px;
  color: ${theme.white};
  background-color: ${theme.lightBlue};
  transition: all 0.3s linear;
  -webkit-box-shadow: 7px 10px 13px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 7px 10px 13px -9px rgba(0, 0, 0, 0.75);
  box-shadow: 7px 10px 13px -9px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  @media screen and (max-width: 480px) {
    font-size: 24px;
    height: 55px;
  }
  @media screen and (max-width: 380px) {
    font-size: 22px;
    height: 45px;
  }
  @media screen and (max-width: 480px) and (max-height: 568px) {
    font-size: 20px;
    height: 40px;
  }
`;
