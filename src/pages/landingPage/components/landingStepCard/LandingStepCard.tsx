import { stepData } from "./stepData";
import * as Styled from "./style";

const LandingStepCard = () => {
  return (
    <Styled.LandingStepCardGridContainer>
      {stepData.map((value) => (
        <Styled.LandingStepCardContainer key={value.id}>
          <Styled.LandingStepCardCountContainer>
            <Styled.LandingStepCardCount>
              {value.count}
            </Styled.LandingStepCardCount>
          </Styled.LandingStepCardCountContainer>
          <Styled.LandingStepCardText>
            {value.firstLabel}
          </Styled.LandingStepCardText>
          <Styled.LandingStepCardText>
            {value.secondLabel}
          </Styled.LandingStepCardText>
        </Styled.LandingStepCardContainer>
      ))}
    </Styled.LandingStepCardGridContainer>
  );
};

export default LandingStepCard;
