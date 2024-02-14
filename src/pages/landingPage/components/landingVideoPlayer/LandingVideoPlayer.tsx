/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaPlay } from "react-icons/fa";
import * as Styled from "./style";
import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

interface I_Props {
  isVideoModalOpen?: boolean;
  setIsVideoModalOpen?: any;
  isIcon?: boolean;
}

const LandingVideoPlayer = ({
  isVideoModalOpen,
  setIsVideoModalOpen,
  isIcon,
}: I_Props) => {
  const videoRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlayPause = () => {
    !isPlaying ? videoRef.current.play() : videoRef.current.pause();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!isVideoModalOpen) {
      videoRef.current.pause();
    }
  }, [isVideoModalOpen]);

  return (
    <Styled.LandingVideoPlayerContainer onClick={handlePlayPause}>
      <Styled.LandingPageVideo
        ref={videoRef}
        onEnded={handlePlayPause}
        playsInline
      >
        <source
          src={`${import.meta.env.VITE_ASSET_URL}/video/video-v1.mp4`}
          type="video/mp4"
        />
      </Styled.LandingPageVideo>
      <Styled.LandingVideoPlayButtonContainer isPlaying={!isPlaying}>
        {!isPlaying && (
          <Styled.LandingVideoPlayButton>
            <FaPlay style={{ marginLeft: "8px" }} />
          </Styled.LandingVideoPlayButton>
        )}
      </Styled.LandingVideoPlayButtonContainer>
      {isIcon && (
        <Styled.CloseContainer onClick={() => setIsVideoModalOpen(false)}>
          <IoMdClose />
        </Styled.CloseContainer>
      )}
    </Styled.LandingVideoPlayerContainer>
  );
};

export default LandingVideoPlayer;
