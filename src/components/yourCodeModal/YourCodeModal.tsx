import SharedModal from "../sharedModal/SharedModal";
import * as Styled from "./style";
import * as SharedStyled from "../../styles/sharedStyle";
import { IoClose } from "react-icons/io5";
import { I_YourCodeModalProps } from "../../interface";

const YourCodeModal = ({
  isYourCodeModalOpen,
  setIsYourCodeModalOpen,
}: I_YourCodeModalProps) => {
  return (
    <>
      <Styled.YourCodeDesktopScreen>
        <SharedModal
          bgColor="rgba(255,255,255,0.4)"
          onClickClose={() => setIsYourCodeModalOpen(false)}
          isModalOpen={isYourCodeModalOpen}
        >
          <Styled.YourCodeModalContainer>
            <Styled.YourCodeTextLineWrapper>
              <SharedStyled.ModalDescription>
                JOUW CODE
              </SharedStyled.ModalDescription>
              <Styled.YourCodeModalText>
                Jouw code is te vinden op de achterzijde van de Milka reep onder
                de barcode.
              </Styled.YourCodeModalText>
              <Styled.YourCodeHorizontalLine />
            </Styled.YourCodeTextLineWrapper>

            <Styled.YourCodeImageContainer>
              <Styled.YourCodeImage
                src={`${import.meta.env.VITE_ASSET_URL}/img/product-v1.png`}
                alt="product"
              />
            </Styled.YourCodeImageContainer>
            <SharedStyled.CloseWrapper
              onClick={() => setIsYourCodeModalOpen(false)}
            >
              <IoClose size={35} />
            </SharedStyled.CloseWrapper>
          </Styled.YourCodeModalContainer>
        </SharedModal>
      </Styled.YourCodeDesktopScreen>
      <Styled.YourCodeMobileScreen>
        <Styled.DownBarMainLayout isSideBarOpen={isYourCodeModalOpen}>
          <Styled.YourCodeDownBarMainContainer
            isSideBarOpen={isYourCodeModalOpen}
          >
            <Styled.YourCodeDownBarContainer>
              <Styled.YourCodeTextLineWrapper>
                <SharedStyled.ModalDescription>
                  JOUW CODE
                </SharedStyled.ModalDescription>
                <Styled.YourCodeModalText>
                  Jouw code is te vinden op de achterzijde van de Milka reep
                  onder de barcode.
                </Styled.YourCodeModalText>
                <Styled.YourCodeHorizontalLine />
              </Styled.YourCodeTextLineWrapper>
              <Styled.YourCodeDownBarImageContainer>
                <Styled.YourCodeImage
                  src={`${import.meta.env.VITE_ASSET_URL}/img/product-v1.png`}
                  alt="product"
                />
              </Styled.YourCodeDownBarImageContainer>
              <SharedStyled.CloseWrapper
                onClick={() => setIsYourCodeModalOpen(false)}
              >
                <IoClose size={35} />
              </SharedStyled.CloseWrapper>
            </Styled.YourCodeDownBarContainer>
          </Styled.YourCodeDownBarMainContainer>
        </Styled.DownBarMainLayout>
      </Styled.YourCodeMobileScreen>
    </>
  );
};

export default YourCodeModal;
