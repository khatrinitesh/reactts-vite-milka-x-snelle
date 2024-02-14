/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoIosArrowDown } from "react-icons/io";
import * as Styled from "./style";

const LandingDownArrow = ({ scrollToSection }: any) => {
  return (
    <Styled.LandingDownArrowContainer onClick={scrollToSection}>
      <Styled.LandingDownArrowText>ONTDEK MEER</Styled.LandingDownArrowText>
      <Styled.LandingDownArrowImage>
        <IoIosArrowDown />
      </Styled.LandingDownArrowImage>
    </Styled.LandingDownArrowContainer>
  );
};

export default LandingDownArrow;
