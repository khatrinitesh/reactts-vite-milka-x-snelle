import SharedModal from "../sharedModal/SharedModal";
import * as Styled from "./style";
import * as SharedStyled from "../../styles/sharedStyle";
import { IoClose } from "react-icons/io5";
import { I_InfoModal } from "../../interface";
const InfoModal = ({
  heading,
  description,
  isInfoModalOpen,
  setIsInfoModalOpen,
}: I_InfoModal) => {
  return (
    <div>
      <SharedModal
        bgColor="rgba(255,255,255,0.4)"
        onClickClose={() => setIsInfoModalOpen(false)}
        isModalOpen={isInfoModalOpen}
      >
        <Styled.InfoModalContainer>
          <SharedStyled.ModalDescription>
            {heading}
          </SharedStyled.ModalDescription>
          <Styled.InfoModalText>{description}</Styled.InfoModalText>
          <SharedStyled.CloseWrapper onClick={() => setIsInfoModalOpen(false)}>
            <IoClose size={35} />
          </SharedStyled.CloseWrapper>
        </Styled.InfoModalContainer>
      </SharedModal>
    </div>
  );
};

export default InfoModal;
