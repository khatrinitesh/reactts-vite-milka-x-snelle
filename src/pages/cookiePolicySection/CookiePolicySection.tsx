import * as SharedStyled from "../../styles/sharedStyle";
import * as Styled from "./style";
const CookiePolicySection = () => {
  return (
    <SharedStyled.OpacityAnimation>
      <SharedStyled.Container width="90%">
        <SharedStyled.Wrapper>
          <Styled.CookiePolicySectionContainer>
            <div className="cookie-page__content">
              <Styled.CookiePolicySectionHeading>
                COOKIEBELEID
              </Styled.CookiePolicySectionHeading>
              <Styled.CookiePolicySectionDescription>
                Een cookie is een klein tekstbestand dat op uw computer of
                mobiele apparaat wordt opgeslagen wanneer u een website bezoekt.
                Cookies worden vervolgens teruggestuurd naar de oorspronkelijke
                website bij elk volgend bezoek, of naar een andere website die
                die cookie herkent, om een historiek van uw online activiteit op
                te maken. Cookies op deze site kunnen::
              </Styled.CookiePolicySectionDescription>
              <Styled.CookiePolicySectionSubHeadingContainer className="list-marker">
                <Styled.CookiePolicySectionSubHeading>
                  AUTOMATISCH VERWIJDERD WORDEN NA ELK BEZOEK (SESSIECOOKIES) OF
                  OPGESLAGEN WORDEN BIJ MEERDERE BEZOEKEN (PERMANENTE COOKIES);
                </Styled.CookiePolicySectionSubHeading>
                <Styled.CookiePolicySectionSubHeading>
                  AANGELEVERD WORDEN IN EERSTE PARTIJ (DOOR ONS INGESTELD) OF
                  DERDE PARTIJ (INGESTELD DOOR EEN ANDERE WEBSITE) CONTEXT.
                </Styled.CookiePolicySectionSubHeading>
              </Styled.CookiePolicySectionSubHeadingContainer>
              <Styled.CookiePolicySectionDescription>
                Op deze website gebruiken wij en derde partijen cookies voor
                verschillende doeleinden, waaronder: het vergemakkelijken van uw
                navigatie, het personaliseren van inhoud, het afstemmen van
                advertenties op uw interesses en het meten van sitegebruik. In
                het bijzonder gebruiken we de volgende cookies:
              </Styled.CookiePolicySectionDescription>
              <div id="ot-sdk-cookie-policy"></div>
              <Styled.CookiePolicySectionHeading>
                Van websites van derde partijen
              </Styled.CookiePolicySectionHeading>
              <Styled.CookiePolicySectionDescription>
                Wanneer u onze website gebruikt, kunt u ingebedde inhoud
                tegenkomen, of kunt u voor bepaalde activiteiten naar andere
                websites geleid worden. Deze websites en ingebedde inhoud kunnen
                hun eigen cookies gebruiken. We hebben geen controle over het
                plaatsen van cookies door andere websites, zelfs niet als u
                hiernaar wordt verwezen vanaf onze website.
              </Styled.CookiePolicySectionDescription>
              <Styled.CookiePolicySectionDescription>
                Onze Cookie-voorkeuren applicatie kan worden gebruikt om uw
                cookievoorkeuren aan te passen. De applicatie registreert uw
                toestemming op ons cookiebeleid en zal hier elke 12 maanden
                opnieuw om vragen om ervoor te zorgen dat u op de hoogte blijft
                van eventuele wijzigingen in ons cookiebeleid. De applicatie
                beheert de door ons ingestelde Performantie, Functionele en
                Gerichte cookies. Strikt Noodzakelijke cookies kunnen niet
                worden uitgeschakeld, noch kan de applicatie worden gebruikt om
                cookies te blokkeren op websites van derden die zijn gelinkt
                vanaf onze website.
              </Styled.CookiePolicySectionDescription>
              <Styled.CookiePolicySectionDescription>
                Veel van de cookies die op onze website worden gebruikt, kunnen
                ook via uw browser worden in- of uitgeschakeld. Volg hiervoor de
                instructies die zich meestal in de menu's 'Help', 'Extra' of
                'Bewerken' in uw browser bevinden. Houd er rekening mee dat als
                u een cookie of een categorie cookies uitschakelt, de cookie
                niet uit uw browser wordt verwijderd, tenzij dit handmatig wordt
                gedaan via uw browserfunctie.
              </Styled.CookiePolicySectionDescription>
              {/* <Styled.CookiePolicySectionButtonContainer>
                <Button
                  text="Cookie Settings"
                  type="button"
                  bgColor={theme.buttonColor}
                  textColor={theme.white}
                  border={`1px solid ${theme.buttonColor}`}
                />
              </Styled.CookiePolicySectionButtonContainer> */}
              <button id="ot-sdk-btn" className="ot-sdk-show-settings">
                {" "}
                Cookie Settings
              </button>
            </div>
          </Styled.CookiePolicySectionContainer>
        </SharedStyled.Wrapper>
      </SharedStyled.Container>
    </SharedStyled.OpacityAnimation>
  );
};

export default CookiePolicySection;
