import * as Styled from "./style";
import notFound from "../../assets/animation/notFound.json";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import * as SharedStyled from "../../styles/sharedStyle";
import Button from "../../components/button/Button";
import { theme } from "../../styles/theme";
const NotFoundSection = () => {
  const navigate = useNavigate();
  const defaultErrorOptions = {
    loop: true,
    autoplay: true,
    animationData: notFound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <SharedStyled.OpacityAnimation>
      <SharedStyled.Container width="90%">
        <Styled.NotFoundMainContainer>
          <Styled.NotFoundImageMainContainer>
            <Styled.NotFoundImageContainer>
              <Lottie options={defaultErrorOptions} />
            </Styled.NotFoundImageContainer>
          </Styled.NotFoundImageMainContainer>
          <Styled.Heading>404 - PAGE NOT FOUND</Styled.Heading>
          <Styled.Description>
            The page you are looking for might been removed.
          </Styled.Description>
          <Styled.NotFoundImageMainContainer>
            <Styled.NotFoundButtonContainer>
              <Button
                type="button"
                bgColor={theme.buttonColor}
                textColor={theme.white}
                border={`1px solid ${theme.buttonColor}`}
                text="Homepage"
                onClick={() => navigate("/")}
              />
            </Styled.NotFoundButtonContainer>
          </Styled.NotFoundImageMainContainer>
        </Styled.NotFoundMainContainer>
      </SharedStyled.Container>
    </SharedStyled.OpacityAnimation>
  );
};

export default NotFoundSection;
