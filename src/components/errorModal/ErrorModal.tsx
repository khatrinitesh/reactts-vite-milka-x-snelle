import SharedModal from "../sharedModal/SharedModal";
import error from "../../assets/animation/error.json";
import * as SharedStyled from "../../styles/sharedStyle";
import * as Styled from "./style";
import Lottie from "react-lottie";
import { IoClose } from "react-icons/io5";
import { I_ErrorModal } from "../../interface";

const ErrorModal = ({ message, handleError, isModalOpen }: I_ErrorModal) => {
  const defaultErrorOptions = {
    loop: true,
    autoplay: true,
    animationData: error,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <SharedModal
      bgColor="rgba(255,255,255,0.4)"
      onClickClose={handleError}
      isModalOpen={isModalOpen}
    >
      <SharedStyled.SharedModalContainer padding="35px">
        <Styled.ErrorModalLottieMainContainer>
          <Styled.ErrorModalLottieContainer>
            <Lottie options={defaultErrorOptions} />
          </Styled.ErrorModalLottieContainer>
        </Styled.ErrorModalLottieMainContainer>
        <SharedStyled.ModalDescription>{message}</SharedStyled.ModalDescription>
        <SharedStyled.CloseWrapper onClick={handleError}>
          <IoClose size={35} />
        </SharedStyled.CloseWrapper>
      </SharedStyled.SharedModalContainer>
    </SharedModal>
  );
};

export default ErrorModal;
