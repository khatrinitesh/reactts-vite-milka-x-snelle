import { IoClose } from "react-icons/io5";
import * as SharedStyled from "../../styles/sharedStyle";
import SharedModal from "../sharedModal/SharedModal";
import { I_ThankYouModalProps } from "../../interface";

const ThankYouModal = ({
  isModalOpen,
  handleThankyouModal,
}: I_ThankYouModalProps) => {
  const handleLogout = () => {
    handleThankyouModal();
  };

  return (
    <SharedModal
      bgColor="rgba(255,255,255,0.4)"
      onClickClose={handleLogout}
      isModalOpen={isModalOpen}
    >
      <SharedStyled.SharedModalContainer>
        <SharedStyled.ModalDescription>
          WIL JE NOG EEN GEPERSONALISEERDE SONG MAKEN MET SNELLE? GA DAN SNEL
          NAAR DE WINKEL EN PROBEER EEN VAN ONZE ANDERE MILKA PRODUCTEN.
        </SharedStyled.ModalDescription>
        {/* <Styled.ThankYouModalHorizontalLine />
        <Styled.ThankYouModalText>
          Vind onze Milka-production op;
        </Styled.ThankYouModalText>
        <Styled.ThankYouModalIconWrapper>
          {imageData.map((value) => (
            <Styled.ThankYouModalIconContainer key={value.id}>
              <Styled.ThankYouModalIcon src={value.img} alt="img" />
            </Styled.ThankYouModalIconContainer>
          ))}
        </Styled.ThankYouModalIconWrapper> */}
        <SharedStyled.CloseWrapper onClick={handleLogout}>
          <IoClose size={35} />
        </SharedStyled.CloseWrapper>
      </SharedStyled.SharedModalContainer>
    </SharedModal>
  );
};

export default ThankYouModal;
