import React from "react";
import * as Styled from "./style";
import { I_SharedModalProps } from "../../interface";

const SharedModal = ({
  children,
  onClickClose,
  bgColor,
  isModalOpen,
}: I_SharedModalProps) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClickClose();
    }
  };
  return (
    <Styled.SharedModalMainContainer
      bgColor={bgColor}
      onMouseDown={handleMouseDown}
      isModalOpen={isModalOpen}
    >
      {children}
    </Styled.SharedModalMainContainer>
  );
};

export default SharedModal;
