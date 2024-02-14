import styled from "styled-components";
import { theme } from "../../styles/theme";

export const UserCountCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-radius: 10px;
  background-color: ${theme.white};
`;
export const UserCountCardIconContainer = styled.div`
  background-color: ${theme.bodyColor};
  height: 65px;
  width: 65px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  @media screen and (max-width: 480px) {
    font-size: 24px;
    height: 50px;
    width: 50px;
  }
`;

export const UserCount = styled.div`
  font-size: 32px;
  font-family: SemiBoldFont;
  color: ${theme.black};
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;
export const UserCountLabel = styled.div`
  font-size: 18px;
  font-family: RegularFont;
  margin-top: 2px;
  text-align: center;
  color: ${theme.black};
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
