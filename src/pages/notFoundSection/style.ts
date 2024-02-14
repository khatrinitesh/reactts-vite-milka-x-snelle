import { styled } from "styled-components";

export const NotFoundMainContainer = styled.div``;
export const NotFoundImageMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NotFoundImageContainer = styled.div`
  height: 300px;
  width: 350px;
  @media screen and (max-width: 480px) {
    height: 230px;
    width: 230px;
  }
`;
export const Heading = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 36px;
  font-family: SemiBoldFont;
  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
export const Description = styled.div`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-family: RegularFont;
  margin: 12px 0;
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const NotFoundButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 180px;
`;
