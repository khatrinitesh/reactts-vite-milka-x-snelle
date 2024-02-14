import * as Styled from "./style";
import * as SharedStyled from "../../../../styles/sharedStyle";

const LandingNavbar = () => {
  return (
    <div>
      <Styled.LandingNavbarLayout>
        <SharedStyled.Container width="90%">
          <Styled.LandingNavbarMainContainer>
            <Styled.LandingLogoContainer>
              <Styled.LandingLogo
                src={`${import.meta.env.VITE_ASSET_URL}/img/logo2-v1.png`}
                alt="logo"
              />
            </Styled.LandingLogoContainer>
            <Styled.LandingNavbarText>MILKA X SNELLE</Styled.LandingNavbarText>
          </Styled.LandingNavbarMainContainer>
        </SharedStyled.Container>
      </Styled.LandingNavbarLayout>
    </div>
  );
};

export default LandingNavbar;
