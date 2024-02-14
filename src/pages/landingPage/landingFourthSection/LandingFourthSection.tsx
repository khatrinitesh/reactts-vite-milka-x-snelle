import * as Styled from "./style";
import { footerData } from "./footerData";
import * as SharedStyled from "../../../styles/sharedStyle";

const LandingFourthSection = () => {
  return (
    <Styled.LandingFourthSectionMainContainer>
      <Styled.LandingFourthSectionContainer>
        <Styled.LandingFourthSectionLogoMainContainer>
          <SharedStyled.Container width="90%">
            <Styled.LandingFourthSectionLogoContainer>
              <Styled.LandingFourthSectionLogo
                src={`${import.meta.env.VITE_ASSET_URL}/img/milka-logo-v1.png`}
                alt="milka-logo"
              />
            </Styled.LandingFourthSectionLogoContainer>
          </SharedStyled.Container>
          <Styled.LandingFourthSectionChocolateWrapper>
            <Styled.LandingFourthSectionLogo
              src={`${import.meta.env.VITE_ASSET_URL}/img/milka-blokje-v1.png`}
              alt="milka-logo"
            />
          </Styled.LandingFourthSectionChocolateWrapper>
        </Styled.LandingFourthSectionLogoMainContainer>

        <Styled.LandingFourthSectionFooterTextWrapper>
          <Styled.LandingFourthSectionFooterTextContainer>
            {footerData.map((value) => (
              <Styled.LandingFourthSectionFooterText
                target="_blank"
                to={value.link}
                key={value.id}
              >
                {value.label}
              </Styled.LandingFourthSectionFooterText>
            ))}
          </Styled.LandingFourthSectionFooterTextContainer>
        </Styled.LandingFourthSectionFooterTextWrapper>
        <Styled.LandingFourthSectionFooterImageMobileContainer>
          <Styled.LandingFourthSectionLogo
            src={`${import.meta.env.VITE_ASSET_URL}/img/mobilefooter-v1.png`}
            alt="footerImage"
          />
        </Styled.LandingFourthSectionFooterImageMobileContainer>
        <Styled.LandingFourthSectionFooterImageContainer>
          <Styled.LandingFourthSectionLogo
            src={`${import.meta.env.VITE_ASSET_URL}/img/LandingFooter-v1.png`}
            alt="footerImage"
          />
        </Styled.LandingFourthSectionFooterImageContainer>

        <Styled.LandingFourthSectionFooterLogoWrapper>
          <Styled.LandingFourthSectionFooterLogoContainer>
            <Styled.LandingFourthSectionLogo
              src={`${
                import.meta.env.VITE_ASSET_URL
              }/img/mondelezLogo-min-v1.png`}
              alt="mondelezLogo"
            />
          </Styled.LandingFourthSectionFooterLogoContainer>

          <Styled.LandingFourthSectionFooterLogoText>
            2023 MONDELEZ NEDERLAND SERVICES B.V - ALL RIGHTS RESERVED
          </Styled.LandingFourthSectionFooterLogoText>
        </Styled.LandingFourthSectionFooterLogoWrapper>
      </Styled.LandingFourthSectionContainer>
    </Styled.LandingFourthSectionMainContainer>
  );
};

export default LandingFourthSection;
