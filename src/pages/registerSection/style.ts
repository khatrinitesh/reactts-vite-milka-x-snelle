/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Field } from "formik";

export const RegisterSectionMainContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.1fr;
  align-items: center;
  margin: 5px 0 10px 0;
  min-height: 80vh;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 2fr 1.5fr;
  }
  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const RegisterSectionLeftContainer = styled.div`
  width: 100%;
  height: 80vh;
  @media screen and (max-width: 620px) {
    height: 100%;
  }
`;

export const LeftImageContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const RegisterSectionRightContainer = styled.div``;

export const RegisterTextHeading = styled.div`
  font-size: 32px;
  color: ${theme.white};
  font-family: SemiBoldFont;
  @media screen and (max-width: 980px) {
    font-size: 28px;
  }
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
  @media screen and (max-width: 620px) {
    text-align: center;
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 18px;
  }
`;

export const RegisterSectionButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 12px;
`;

export const RegisterDateContainer = styled.div`
  height: 45px;
  width: 100% !important;
  padding: 0 20px;
  border-radius: 10px;
  font-size: 16px;
  font-family: RegularFont;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.white};
  color: ${theme.black};
  margin-top: 12px;
  span {
    color: ${theme.lightGrey};
  }
`;

export const RegisterLogo = styled.div<any>`
  display: flex;
  color: ${theme.lightGrey};
  font-size: 22px;
  cursor: pointer;
`;

export const CheckBoxWrapper = styled.div`
  margin-top: 12px;
`;

export const CheckBoxLabelContainer = styled.div`
  span {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const DateInputNone = styled(Field)`
  display: none;
`;
