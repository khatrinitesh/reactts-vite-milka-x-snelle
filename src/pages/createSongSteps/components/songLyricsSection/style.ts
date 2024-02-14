import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const SongLyricsMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  min-height: 80vh;
`;
export const SongLyricsContainer = styled.div`
  width: 800px;
`;

export const SongLyricsTextMainContainer = styled.div`
  padding: 20px;
  background-color: rgba(59, 39, 116, 0.5);
  border-radius: 10px;
  margin-top: 20px;
`;

export const SongLyricsTextContainer = styled.div`
  height: 300px;
  overflow: auto;
`;
export const SongLyricsText = styled.div`
  font-size: 16px;
  font-family: RegularFont;
  color: ${theme.white};
  margin-bottom: 12px;
  @media screen and (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const SongLyricsMainButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 20px;
  @media screen and (max-width: 620px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
export const BackLogoImage = styled.img`
  height: 30px;
  width: 30px;
  object-fit: contain;
  display: flex;
`;

export const SongLyricsButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 200px;
  grid-gap: 20px;
  @media screen and (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const SongLyricsNavTabMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const SongLyricsNavTabContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const SongLyricsNavTab = styled.div<{ activeTab: boolean }>`
  font-size: 18px;
  font-family: SemiBoldFont;
  color: ${({ activeTab }) => (activeTab ? theme.buttonColor : theme.white)};
  cursor: pointer;
`;

export const HeadingWrapper = styled.div`
  margin-top: 8px;
`;
