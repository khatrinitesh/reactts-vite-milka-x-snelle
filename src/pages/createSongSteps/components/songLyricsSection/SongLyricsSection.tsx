/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import * as SharedStyled from "../../../../styles/sharedStyle";
import * as Styled from "./style";
import { IoMdArrowRoundBack } from "react-icons/io";
import Button from "../../../../components/button/Button";
import { theme } from "../../../../styles/theme";
import { TbReload } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import { I_SongLyricsSectionProps } from "../../../../interface";
import { memo, useEffect } from "react";
const SongLyricsSection = ({
  back,
  handleAudioSongGenerate,
  handleLyricsGenerate,
  data,
  lyricsTab,
  activeTab,
  handleTabClick,
  setLyricsTab,
  generateLyricsLoading,
  generateSongLoading,
}: I_SongLyricsSectionProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (lyricsTab?.length) {
      handleTabClick(lyricsTab?.length - 1);
    }
  }, [lyricsTab?.length]);

  return (
    <SharedStyled.OpacityAnimation>
      <SharedStyled.Container width="90%">
        <Styled.SongLyricsMainContainer>
          <Styled.SongLyricsContainer>
            <div>
              <SharedStyled.IconOuterWrapper
                onClick={() => {
                  setLyricsTab([]);
                  handleTabClick(0);
                  back();
                }}
              >
                <IoMdArrowRoundBack size={35} />
              </SharedStyled.IconOuterWrapper>
            </div>
            <Styled.HeadingWrapper>
              <SharedStyled.HeadingText>
                JE SONGTEKST STAAT HIERONDER
              </SharedStyled.HeadingText>
            </Styled.HeadingWrapper>

            <Styled.SongLyricsNavTabMainContainer>
              <Styled.SongLyricsNavTabContainer>
                {Array.from({ length: lyricsTab?.length }, (_x, v) => (
                  <Styled.SongLyricsNavTab
                    key={v}
                    activeTab={activeTab === v}
                    onClick={() => handleTabClick(v)}
                  >
                    VERSIE {v + 1}
                  </Styled.SongLyricsNavTab>
                ))}
              </Styled.SongLyricsNavTabContainer>
            </Styled.SongLyricsNavTabMainContainer>

            <Styled.SongLyricsTextMainContainer>
              <Styled.SongLyricsTextContainer>
                {lyricsTab[activeTab]?.lyrics
                  ?.split("\n")
                  ?.map((value: string, index: number) => (
                    <Styled.SongLyricsText key={index}>
                      {" "}
                      {value}{" "}
                    </Styled.SongLyricsText>
                  ))}
              </Styled.SongLyricsTextContainer>
            </Styled.SongLyricsTextMainContainer>

            <Styled.SongLyricsMainButtonWrapper>
              <Styled.SongLyricsButtonWrapper>
                <Button
                  text="Genereer nieuwe songtekst"
                  bgColor={theme.buttonColor}
                  border={`1px solid ${theme.buttonColor}`}
                  onClick={() => handleLyricsGenerate(data)}
                  textColor={theme.white}
                  type="button"
                  isButtonIcon={true}
                  buttonIcon={<TbReload />}
                  disabled={lyricsTab?.length === 3 || generateLyricsLoading}
                  isLoading={generateLyricsLoading}
                />
                <Button
                  text="Genereer song"
                  bgColor={theme.buttonColor}
                  border={`1px solid ${theme.buttonColor}`}
                  onClick={handleAudioSongGenerate}
                  textColor={theme.white}
                  type="button"
                  isButtonIcon={true}
                  buttonIcon={<FaArrowRight />}
                  disabled={generateSongLoading || generateLyricsLoading}
                />
              </Styled.SongLyricsButtonWrapper>
            </Styled.SongLyricsMainButtonWrapper>
            <SharedStyled.SongLyricsText>
              Dit zijn AI gegenereerde songteksten. Bekijk{" "}
              <span>
                <SharedStyled.StyledHyperLink
                  href={`${
                    import.meta.env.VITE_ASSET_URL
                  }/pdf/Milka-x-Snelle-TnC-document-v1.pdf`}
                  target="_blank"
                >
                  actievoorwaarden
                </SharedStyled.StyledHyperLink>
              </span>{" "}
              .
            </SharedStyled.SongLyricsText>
          </Styled.SongLyricsContainer>
        </Styled.SongLyricsMainContainer>
      </SharedStyled.Container>
    </SharedStyled.OpacityAnimation>
  );
};

export default memo(SongLyricsSection);
