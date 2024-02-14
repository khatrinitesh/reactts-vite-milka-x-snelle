import { useNavigate } from "react-router-dom";
import * as Styled from "./style";

const LandingButton = () => {
  const navigate = useNavigate();
  return (
    <Styled.LandingButtonContainer onClick={() => navigate("/")}>
      MAAK MIJN VIDEO
    </Styled.LandingButtonContainer>
  );
};

export default LandingButton;
