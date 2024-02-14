import styled from "styled-components";
import { theme } from "../../styles/theme";

export const AdminLabelHeadingBoxContainer = styled.div`
  background-color: ${theme.buttonColor};
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const AdminLabelHeading = styled.div`
  font-size: 32px;
  font-family: SemiBoldFont;
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;
