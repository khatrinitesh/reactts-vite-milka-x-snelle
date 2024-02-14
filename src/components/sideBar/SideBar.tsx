import * as Styled from "./style";
import { sideBarData } from "./sidebarData";
import { IoClose } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { I_SideBarProps } from "../../interface";

const SideBar = ({ setIsSideBarOpen, setIsVideoModalOpen }: I_SideBarProps) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsSideBarOpen(false);
    }
  };

  return (
    <Styled.SideBarMainContainer
      bgColor="rgba(255,255,255,0.4)"
      onMouseDown={handleMouseDown}
    >
      <Styled.SideBarContainer>
        <Styled.SideBarTextMainContainer>
          {sideBarData.map((value) => (
            <Styled.SideBarTextContainer key={value.id}>
              <Styled.SideBarInfoIconWrapper
                onClick={() => {
                  if (value.link === "video") {
                    setIsVideoModalOpen(true);
                    setIsSideBarOpen(false);
                  } else {
                    window.open(value.link, "_blank");
                    setIsSideBarOpen(false);
                  }
                }}
              >
                <Styled.SideBarText>{value.label}</Styled.SideBarText>
                {value.isIcon && <AiOutlineQuestionCircle size={30} />}
              </Styled.SideBarInfoIconWrapper>
            </Styled.SideBarTextContainer>
          ))}
        </Styled.SideBarTextMainContainer>
        <Styled.SideBarCloseContainer>
          <IoClose size={35} onClick={() => setIsSideBarOpen(false)} />
        </Styled.SideBarCloseContainer>
      </Styled.SideBarContainer>
    </Styled.SideBarMainContainer>
  );
};

export default SideBar;
