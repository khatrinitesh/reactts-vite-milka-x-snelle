import * as Styled from "./style";
import whiteLoading from "../../assets/animation/whiteLoader.json";
import Lottie from "react-lottie";
import { I_ButtonProps } from "../../interface";

const Button = ({
  bgColor,
  border,
  onClick,
  text,
  disabled,
  type,
  textColor,
  isLoading,
  isButtonIcon,
  buttonIcon,
}: I_ButtonProps) => {
  const defaultErrorOptions = {
    loop: true,
    autoplay: true,
    animationData: whiteLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Styled.ButtonContainer
      type={type}
      disabled={disabled}
      bgColor={bgColor}
      border={border}
      textColor={textColor}
      onClick={onClick}
    >
      {isLoading ? (
        <Styled.LoadingContainer>
          <Lottie options={defaultErrorOptions} />
        </Styled.LoadingContainer>
      ) : (
        <>
          <span>{text}</span>
          {isButtonIcon && buttonIcon}
        </>
      )}
    </Styled.ButtonContainer>
  );
};

export default Button;
