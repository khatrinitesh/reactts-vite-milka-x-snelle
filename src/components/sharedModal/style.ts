import styled from "styled-components";

export const SharedModalMainContainer = styled.div<{
  bgColor?: string;
  isModalOpen?: boolean;
}>`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 10px;
  box-sizing: border-box;
  display: ${({ isModalOpen }) => (isModalOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor || "#13131d"};
  z-index: 10000;
`;
