import styled from "styled-components";

export const SongLoadingLottieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
`;

export const SongLoadingLottie = styled.div`
  height: 110px;
  width: 80px;
  @media screen and (max-width: 380px) {
    height: 90px;
    width: 60px;
  }
`;
