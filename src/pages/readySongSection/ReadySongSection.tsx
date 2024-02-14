/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import * as SharedStyled from "../../styles/sharedStyle";
import * as Styled from "./style";
import { handleDownload } from "../../utils/utils";
import { useSetFlagMutation } from "../../logic/reactQuery/mutation/useSetFlagMutation";
import { useAppSelector } from "../../logic/redux/store/hooks";
import ThankYouModal from "../../components/thankYouModal/ThankYouModal";
// import { useGenerateShortLinkMutation } from "../../logic/reactQuery/mutation/useGenerateShortLink";
import Lottie from "react-lottie";
import whiteLoading from "../../assets/animation/whiteLoader.json";
import { isIOS } from "react-device-detect";
import { I_ReadyVideoProps } from "../../interface";
const ReadySongSection = ({ videoUrl, sid, name }: I_ReadyVideoProps) => {
  const isUid = useAppSelector((state) => state.userReducer.isUid);
  const videoRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isDownloadLoading, setIsDownloadLoading] = useState<boolean>(false);
  const [isShareLoading, setIsShareLoading] = useState<boolean>(false);
  const [isThankyouModalOpen, setIsThankyouModalOpen] =
    useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePlayPause = () => {
    !isPlaying ? videoRef.current.play() : videoRef.current.pause();
    setIsPlaying(!isPlaying);
  };

  const { mutateAsync, isLoading } = useSetFlagMutation();

  // const {
  //   mutateAsync: generateShortLinkMutate,
  //   isLoading: generateShortLinkLoading,
  // } = useGenerateShortLinkMutation();

  // const handleShortLink = async () => {
  //   const apiKey = import.meta.env.VITE_API_SHORT_KEY;
  //   const paramsShortLinkData = {
  //     key: apiKey,
  //     proj: "MilkaSnelle",
  //     link: videoUrl,
  //   };
  //   const shareableLink: any = await generateShortLinkMutate(
  //     paramsShortLinkData
  //   );
  //   const shortLink = shareableLink?.data?.d?.shortlink;
  //   return shortLink || videoUrl;
  // };

  async function generateSharableVideoFile() {
    const response = await fetch(videoUrl);
    const data = await response.blob();
    return new File([data], `Song voor ${name}.mp4`, { type: "video/mp4" });
  }

  const handleShare = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const paramsSetFlag = {
        apikey: apiKey,
        uid: isUid,
        sid,
        type: "share",
      };
      setIsShareLoading(true);
      // const shareableLink = await handleShortLink();
      const sharableVideo = await generateSharableVideoFile();
      const shareContent = {
        title: "Milks-Snelle Song",
        text: "Hey, ik heb samen met Snelle, Milka en AI een persoonlijke song voor je gemaakt, omdat ik je iets liefs wilde zeggen. #MilkaxSnelle #TederSmaaktBeter",
        // url: shareableLink,
      };
      if (navigator.canShare) {
        if (navigator.canShare({ files: [sharableVideo] })) {
          const contentToShare = isIOS
            ? { files: [sharableVideo] }
            : { ...shareContent, files: [sharableVideo] };
          await navigator.share(contentToShare);
        } else {
          await navigator.share(shareContent);
        }
      } else {
        alert("Sharing is not supported on your device");
      }
      const result = await mutateAsync(paramsSetFlag);
      if (result?.data?.success) {
        setIsShareLoading(false);
        setIsThankyouModalOpen(true);
      }
    } catch (e) {
      console.log(e);
      setIsShareLoading(false);
    }
  };

  const handleDownloadSetFlag = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const paramsSetFlag = {
        apikey: apiKey,
        uid: isUid,
        sid,
        type: "download",
      };
      setIsDownloadLoading(true);
      await mutateAsync(paramsSetFlag);
      await handleDownload(videoUrl, name);
      setIsDownloadLoading(false);
      setIsThankyouModalOpen(true);
    } catch (e) {
      console.log(e);
    }
  };

  const defaultErrorOptions = {
    loop: true,
    autoplay: true,
    animationData: whiteLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleThankyouModal = () => {
    setIsThankyouModalOpen(false);
  };

  return (
    <>
      <SharedStyled.OpacityAnimation>
        <SharedStyled.Container width="90%">
          <Styled.ReadySongMainContainer>
            <Styled.ReadySongContainer>
              <Styled.ReadySongLeftContainer>
                <div>
                  <Styled.ReadySongHeadingText>
                    JOUW UNIEKE SONG
                  </Styled.ReadySongHeadingText>
                  <Styled.ReadySongHeadingText>
                    VAN SNELLE IS KLAAR!
                  </Styled.ReadySongHeadingText>
                </div>

                <Styled.ReadySongButtonDesktopWrapper>
                  <Styled.ReadySongButtonText>
                    DEEL JOUW PERSOONLIJKE VIDEOBOODSCHAP
                  </Styled.ReadySongButtonText>
                  <Styled.ReadySongButtonContainer>
                    <Styled.ReadySongButton
                      onClick={handleShare}
                      // disabled={generateShortLinkLoading}
                    >
                      {isShareLoading ? (
                        <Styled.LoadingContainer>
                          <Lottie options={defaultErrorOptions} />
                        </Styled.LoadingContainer>
                      ) : (
                        <span>Direct Delen</span>
                      )}
                    </Styled.ReadySongButton>
                    <Styled.ReadySongButton
                      disabled={isLoading}
                      onClick={handleDownloadSetFlag}
                    >
                      {isDownloadLoading ? (
                        <Styled.LoadingContainer>
                          <Lottie options={defaultErrorOptions} />
                        </Styled.LoadingContainer>
                      ) : (
                        "Download"
                      )}
                    </Styled.ReadySongButton>
                  </Styled.ReadySongButtonContainer>
                </Styled.ReadySongButtonDesktopWrapper>
              </Styled.ReadySongLeftContainer>
              <Styled.ReadySongRightContainer>
                <Styled.VideoAspectRatioContainer onClick={handlePlayPause}>
                  <Styled.ReadySongVideo
                    ref={videoRef}
                    onEnded={handlePlayPause}
                    playsInline
                    poster={`${
                      import.meta.env.VITE_ASSET_URL
                    }/img/poster-v1.png`}
                  >
                    <source src={videoUrl} type="video/mp4" />
                  </Styled.ReadySongVideo>
                  <Styled.VideoOuterLayerContainer isPlaying={!isPlaying}>
                    <Styled.VideoOuterLayerWrapper>
                      <Styled.VideoOuterLayerIconContainer>
                        {!isPlaying && (
                          <SharedStyled.IconModalOuterMainWrapper marginTop="0px">
                            <SharedStyled.IconModalOuterWrapper>
                              <FaPlay size={32} style={{ marginLeft: "5px" }} />
                            </SharedStyled.IconModalOuterWrapper>
                          </SharedStyled.IconModalOuterMainWrapper>
                        )}
                        {!isPlaying && (
                          <Styled.ReadySongButtonText>
                            EINDRESULTAAT
                          </Styled.ReadySongButtonText>
                        )}
                      </Styled.VideoOuterLayerIconContainer>
                    </Styled.VideoOuterLayerWrapper>
                  </Styled.VideoOuterLayerContainer>
                </Styled.VideoAspectRatioContainer>
              </Styled.ReadySongRightContainer>
              <Styled.ReadySongButtonMobileWrapper>
                <Styled.ReadySongButtonText>
                  DEEL JOUW PERSOONLIJKE VIDEOBOODSCHAP
                </Styled.ReadySongButtonText>
                <Styled.ReadySongButtonContainer>
                  <Styled.ReadySongButton
                    onClick={handleShare}
                    // disabled={generateShortLinkLoading}
                  >
                    {isShareLoading ? (
                      <Styled.LoadingContainer>
                        <Lottie options={defaultErrorOptions} />
                      </Styled.LoadingContainer>
                    ) : (
                      <span>Direct Delen</span>
                    )}
                  </Styled.ReadySongButton>
                  <Styled.ReadySongButton
                    disabled={isLoading}
                    onClick={handleDownloadSetFlag}
                  >
                    {isDownloadLoading ? (
                      <Styled.LoadingContainer>
                        <Lottie options={defaultErrorOptions} />
                      </Styled.LoadingContainer>
                    ) : (
                      "Download"
                    )}
                  </Styled.ReadySongButton>
                </Styled.ReadySongButtonContainer>
              </Styled.ReadySongButtonMobileWrapper>
            </Styled.ReadySongContainer>
            <SharedStyled.SongLyricsText marginTop="10px">
              Dit zijn AI gegenereerde songteksten. Controleer{" "}
              <span>
                <SharedStyled.StyledHyperLink
                  href={`${
                    import.meta.env.VITE_ASSET_URL
                  }/pdf/Milka-x-Snelle-TnC-document-v1.pdf`}
                  target="_blank"
                >
                  actievoorwaarden
                </SharedStyled.StyledHyperLink>
              </span>
              .
            </SharedStyled.SongLyricsText>
          </Styled.ReadySongMainContainer>
        </SharedStyled.Container>
      </SharedStyled.OpacityAnimation>
      <ThankYouModal
        isModalOpen={isThankyouModalOpen}
        handleThankyouModal={handleThankyouModal}
      />
    </>
  );
};

export default memo(ReadySongSection);
