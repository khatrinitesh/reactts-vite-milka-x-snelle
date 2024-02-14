import styled from "styled-components";
import { theme } from "../../styles/theme";

export const AdminLoginSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  min-height: 80vh;
  grid-gap: 20px;
  margin: 5px 0 10px 0;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;
export const AdminLoginSectionFirstContainer = styled.div``;
export const AdminLoginSectionSecondContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AdminLoginSectionImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const AdminLoginSectionImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const AdminLoginInputContainer = styled.div`
  width: 100%;
`;
export const AdminLoginHeading = styled.div`
  font-size: 36px;
  font-family: SemiBoldFont;
  color: ${theme.white};
  text-align: center;
`;
export const AdminLoginText = styled.div`
  font-size: 20px;
  font-family: RegularFont;
  text-align: center;
`;
export const AdminLoginInputWrapper = styled.div`
  /* ... */
`;
export const AdminLoginButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 16px;
`;
