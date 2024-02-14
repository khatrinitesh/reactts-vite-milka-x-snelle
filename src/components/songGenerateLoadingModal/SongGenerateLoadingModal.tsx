import SharedModal from "../sharedModal/SharedModal";
import * as SharedStyled from "../../styles/sharedStyle";
import * as Styled from "./style";
import Lottie from "react-lottie";
import glassLoader from "../../assets/animation/glassLoader.json";
import { I_SongGenerateLoadingModalProps } from "../../interface";
import { theme } from "../../styles/theme";

const SongGenerateLoadingModal = ({
  isModalOpen,
}: I_SongGenerateLoadingModalProps) => {
  const defaultLoadingOptions = {
    loop: true,
    autoplay: true,
    animationData: glassLoader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <SharedModal
      bgColor={theme.buttonColor}
      onClickClose={() => {}}
      isModalOpen={isModalOpen}
    >
      <SharedStyled.SharedModalContainer padding="35px">
        <SharedStyled.ModalDescription>
          JOUW SONG WORDT MET AI GEGENEREERD
        </SharedStyled.ModalDescription>
        <Styled.SongLoadingLottieContainer>
          <Styled.SongLoadingLottie>
            <Lottie options={defaultLoadingOptions} />
          </Styled.SongLoadingLottie>
        </Styled.SongLoadingLottieContainer>
      </SharedStyled.SharedModalContainer>
    </SharedModal>
  );
};

export default SongGenerateLoadingModal;
