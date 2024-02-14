import { Field } from "formik";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const InputFieldMainContainer = styled.div`
  position: relative;
  margin-top: 12px;
`;

export const InputFieldContainer = styled.div`
  height: 45px;
  width: 100%;
`;

export const InputBox = styled(Field)`
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  padding: 0 20px;
  border-radius: 10px;
  font-size: 16px;
  font-family: RegularFont;
  box-sizing: border-box;
  background-color: ${theme.white};
  color: ${theme.black};
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const InputIconContainer = styled.div`
  position: absolute;
  top: 13px;
  right: 20px;
  cursor: pointer;
  color: ${theme.lightGrey};
  font-size: 22px;
`;

export const InputIcon = styled.img`
  height: 20px;
  width: 20px;
  object-fit: contain;
  display: flex;
`;
