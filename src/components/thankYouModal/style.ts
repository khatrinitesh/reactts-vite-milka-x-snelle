import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ThankYouModalHorizontalLine = styled.hr`
  width: 100%;
  margin: 12px 0;
  border: 1px solid ${theme.lightBlue};
`;

export const ThankYouModalText = styled.div`
  font-size: 18px;
  font-family: RegularFont;
  color: ${theme.white};
  text-align: center;
`;

export const ThankYouModalIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 8px;
  margin-top: 12px;
`;
export const ThankYouModalIconContainer = styled.div`
  height: 40px;
  width: 100px;
  display: flex;
  @media screen and (max-width: 480px) {
    width: 70px;
  }
  @media screen and (max-width: 380px) {
    width: 50px;
  }
`;
export const ThankYouModalIcon = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  cursor: pointer;
`;
