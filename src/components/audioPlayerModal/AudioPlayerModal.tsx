/* eslint-disable react-refresh/only-export-components */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as SharedStyled from "../../styles/sharedStyle";
import SharedModal from "../sharedModal/SharedModal";
import * as Styled from "./style";
import { FaPause, FaPlay } from "react-icons/fa";
import { memo, useRef, useState } from "react";
import Button from "../button/Button";
import { theme } from "../../styles/theme";
import { I_AudioPlayerModalProps } from "../../interface";
import Lottie from "react-lottie";
import whiteLoading from "../../assets/animation/whiteLoader.json";

const AudioPlayerModal = ({
  audioUrl,
  isModalOpen,
  handleVideoSongGenerate,
  generateVideoLoading,
  isRegenerateVideoLoading,
}: I_AudioPlayerModalProps) => {
  const currentAudio = useRef<any>(null);
  const [audioProgress, setAudioProgress] = useState<number>(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [musicTotalLength, setMusicTotalLength] = useState<string>("00 : 00");
  const [musicCurrentTime, setMusicCurrentTime] = useState<string>("00 : 00");

  const handleMusicProgressBar = (e: any) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime =
      (e.target.value * currentAudio.current.duration) / 100;
  };

  const handleAudioPlay = () => {
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(!isAudioPlaying);
    } else {
      currentAudio.current.pause();
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

  const handleAudioUpdate = () => {
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
    setMusicTotalLength(musicTotalLength0);

    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${
      currentSec < 10 ? `0${currentSec}` : currentSec
    }`;
    setMusicCurrentTime(musicCurrentT);

    const progress = Number(
      (currentAudio.current.currentTime / currentAudio.current.duration) * 100
    );
    setAudioProgress(isNaN(progress) ? 0 : progress);

    if (currentAudio.current.currentTime >= currentAudio.current.duration) {
      currentAudio.current.pause();
      setIsAudioPlaying(false);
      setAudioProgress(0);
      setMusicCurrentTime("00 : 00");
    }
  };

  const handleAudioLoadedMetadata = () => {
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
    setMusicTotalLength(musicTotalLength0);
  };

  const handleOnEnded = () => {
    setIsAudioPlaying(false);
    setAudioProgress(0);
    setMusicCurrentTime("00 : 00");
    // handleVideoSongGenerate();
  };

  const defaultErrorOptions = {
    loop: true,
    autoplay: true,
    animationData: whiteLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <SharedModal
      bgColor={theme.bodyColor}
      onClickClose={() => {}}
      isModalOpen={isModalOpen}
    >
      <audio
        src={audioUrl}
        ref={currentAudio}
        onTimeUpdate={handleAudioUpdate}
        onLoadedMetadata={handleAudioLoadedMetadata}
        onEnded={handleOnEnded}
      />

      <div>
        <SharedStyled.SharedModalContainer padding="35px">
          <SharedStyled.ModalDescription>
            JE VIDEO WORDT MOMENTEEL VOORBEREID, LUISTER ALVAST NAAR JE SONG
          </SharedStyled.ModalDescription>
          <Styled.AudioPlayerModalInputSliderContainer>
            <Styled.MusicRangeInput
              type="range"
              value={audioProgress}
              onChange={handleMusicProgressBar}
            />
            <Styled.MusicDurationContainer>
              <Styled.MusicDuration>{musicCurrentTime}</Styled.MusicDuration>
              <Styled.MusicDuration>{musicTotalLength}</Styled.MusicDuration>
            </Styled.MusicDurationContainer>
          </Styled.AudioPlayerModalInputSliderContainer>
          <SharedStyled.IconModalOuterMainWrapper marginTop="0px">
            {isAudioPlaying ? (
              <SharedStyled.IconModalOuterWrapper onClick={handleAudioPlay}>
                <FaPause size={32} />
              </SharedStyled.IconModalOuterWrapper>
            ) : (
              <SharedStyled.IconModalOuterWrapper onClick={handleAudioPlay}>
                <FaPlay size={32} style={{ marginLeft: "5px" }} />
              </SharedStyled.IconModalOuterWrapper>
            )}
          </SharedStyled.IconModalOuterMainWrapper>
        </SharedStyled.SharedModalContainer>
        {(generateVideoLoading || isRegenerateVideoLoading) && (
          <Styled.AudioPlayerText>
            NOG EVENTJES GEDULD, JE VIDEO IS BIJNA KLAAR
          </Styled.AudioPlayerText>
        )}

        <Styled.AudioModalButtonContainer>
          <Button
            text="Bekijk jouw video"
            bgColor={theme.buttonColor}
            border={`1px solid ${theme.buttonColor}`}
            textColor={theme.white}
            type="button"
            disabled={generateVideoLoading || isRegenerateVideoLoading}
            onClick={handleVideoSongGenerate}
            isButtonIcon={generateVideoLoading || isRegenerateVideoLoading}
            buttonIcon={
              <Styled.LoadingContainer>
                <Lottie options={defaultErrorOptions} />
              </Styled.LoadingContainer>
            }
          />
        </Styled.AudioModalButtonContainer>
      </div>
    </SharedModal>
  );
};

export default memo(AudioPlayerModal);
