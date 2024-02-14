import styled from "styled-components";
import { theme } from "../../styles/theme";

export const CookiePolicySectionContainer = styled.div`
  margin: 20px 0;
  color: ${theme.white} !important;
`;

export const CookiePolicySectionHeading = styled.div`
  font-family: SemiBoldFont;
  font-size: 32px;
`;

export const CookiePolicySectionSubHeadingContainer = styled.div`
  margin-top: 10px;
`;

export const CookiePolicySectionSubHeading = styled.li`
  font-family: SemiBoldFont;
  font-size: 20px;
`;

export const CookiePolicySectionDescription = styled.div`
  font-family: RegularFont;
  font-size: 18px;
  margin-top: 10px;
`;

export const CookiePolicySectionButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 200px;
  margin-top: 10px;
`;
