/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const GenerateSongMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  min-height: 70vh;
`;
export const GenerateSongContainer = styled.div`
  width: 800px;
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;
export const GenerateSongInputMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const GenerateSongInputContainer = styled.div`
  width: 500px;
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;
export const GenerateSongInputWrapper = styled.div`
  margin-top: 20px;
  /* background-color: red; */
`;

export const GenerateSongLabel = styled.label`
  display: block;
  font-size: 18px;
  font-family: SemiBoldFont;
  color: ${theme.white};
  span {
    font-size: 14px;
    @media screen and (max-width: 380px) {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 380px) {
    font-size: 14px;
  }
`;

export const GenerateSongTextAreaContainer = styled.div`
  height: 200px;
  width: 100%;
  margin-top: 12px;
  @media screen and (max-width: 380px) {
    height: 170px;
  }
`;

export const GenerateSongButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 20px;
`;

export const GenerateSongDropDownMainContainer = styled.div`
  position: relative;
  margin-top: 12px;
`;

export const DiGenerateSongDropDownIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  right: 20px;
  z-index: 2;
`;
export const GenerateSongDropDownIcon = styled.div<any>`
  display: flex;
  cursor: pointer;
`;
export const GenerateSongDropDownField = styled.div<{ disabled?: boolean }>`
  height: 45px;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-radius: 10px;
  font-size: 16px;
  font-family: RegularFont;
  box-sizing: border-box;
  background-color: ${theme.white};
  color: ${theme.black};
  opacity: ${({ disabled }) => disabled && 0.7};
  cursor: ${({ disabled }) => disabled && "not-allowed"};
  span {
    color: #808080;
  }
`;
export const GenerateSongDropDown = styled.div`
  height: 230px;
  overflow: auto;
  background-color: ${theme.white};
  border-radius: 10px;
  width: 100%;
  position: absolute;
  top: 55px;
  -webkit-box-shadow: 10px 10px 37px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 37px -9px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 37px -9px rgba(0, 0, 0, 0.75);
`;
export const GenerateSongDropDownContent = styled.div<{
  fontFamily?: string;
  bgColor?: string;
  color?: string;
}>`
  font-size: 16px;
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ color }) => color};
  height: 45px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #808080;
  background-color: ${({ bgColor }) => bgColor};
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
`;

export const GenerateSongDropDownToggleIconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
