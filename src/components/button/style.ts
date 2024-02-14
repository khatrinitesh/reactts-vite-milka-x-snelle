import styled from "styled-components";

export const ButtonContainer = styled.button<{
  border?: string;
  bgColor?: string;
  textColor?: string;
}>`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  outline: none;
  border: ${({ border }) => border || "none"};
  border-radius: 10px;
  font-size: 22px;
  font-family: SemiBoldFont;
  background-color: ${({ bgColor }) => bgColor || "none"};
  color: ${({ textColor }) => textColor || "none"};
  cursor: pointer;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
    height: 45px;
  }
`;

export const LoadingContainer = styled.span`
  display: inline-block;
  height: 100%;
  width: 90px;
`;
