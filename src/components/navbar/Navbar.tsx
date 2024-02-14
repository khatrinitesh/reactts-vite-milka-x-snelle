import * as SharedStyled from "../../styles/sharedStyle";
import * as Styled from "./style";
import SideBar from "../sideBar/SideBar";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../logic/redux/store/hooks";
import { FaRegUserCircle } from "react-icons/fa";
import SharedModal from "../sharedModal/SharedModal";
import LandingVideoPlayer from "../../pages/landingPage/components/landingVideoPlayer/LandingVideoPlayer";
const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);
  const isUid = useAppSelector((state) => state.userReducer.isUid);
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState<boolean>(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);

  return (
    <Styled.NavbarLayout>
      <SharedStyled.Container width="90%">
        <Styled.NavbarMainContainer>
          <Styled.LogoTitleWrapper>
            {((isLoggedIn && isUid) || pathname === "/dashboard") && (
              <Styled.LogoImageContainer onClick={() => navigate("/")}>
                <Styled.LogoImage
                  src={`${import.meta.env.VITE_ASSET_URL}/img/logo2-v1.png`}
                  alt="logo1"
                />
              </Styled.LogoImageContainer>
            )}
          </Styled.LogoTitleWrapper>
          {pathname === "/dashboard" ? (
            <Styled.UserLoginMainContainer>
              <Styled.UserLoginContainer
                onClick={() => setIsLogoutOpen((prev) => !prev)}
              >
                <FaRegUserCircle />
              </Styled.UserLoginContainer>
              {isLogoutOpen && (
                <Styled.UserLogoutContainer onClick={() => navigate("/")}>
                  Logout
                </Styled.UserLogoutContainer>
              )}
            </Styled.UserLoginMainContainer>
          ) : (
            <SharedStyled.IconOuterWrapper
              onClick={() => setIsSideBarOpen((prev) => !prev)}
            >
              <Styled.HamBurgerLogoImage
                src={`${import.meta.env.VITE_ASSET_URL}/img/hamburger-v1.svg`}
                alt="menu"
              />
            </SharedStyled.IconOuterWrapper>
          )}
        </Styled.NavbarMainContainer>
      </SharedStyled.Container>
      {isSideBarOpen && (
        <SideBar
          setIsSideBarOpen={setIsSideBarOpen}
          setIsVideoModalOpen={setIsVideoModalOpen}
        />
      )}
      <SharedModal
        onClickClose={() => {
          setIsVideoModalOpen(!isVideoModalOpen);
        }}
        bgColor="rgba(0,0,0,0.6)"
        isModalOpen={isVideoModalOpen}
      >
        <LandingVideoPlayer
          isVideoModalOpen={isVideoModalOpen}
          setIsVideoModalOpen={setIsVideoModalOpen}
          isIcon={true}
        />
      </SharedModal>
    </Styled.NavbarLayout>
  );
};

export default Navbar;
