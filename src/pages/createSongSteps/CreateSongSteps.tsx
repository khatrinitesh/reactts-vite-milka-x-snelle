/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import GenerateSongSection from "./components/generateSongSection/GenerateSongSection";
import SongLyricsSection from "./components/songLyricsSection/SongLyricsSection";
import * as yup from "yup";
import { useGenerateLyricsMutation } from "../../logic/reactQuery/mutation/useGenerateLyricsMutation";
import { useGenerateSongMutation } from "../../logic/reactQuery/mutation/useGenerateSongMutation";
import AudioPlayerModal from "../../components/audioPlayerModal/AudioPlayerModal";
import { useGenerateVideoMutation } from "../../logic/reactQuery/mutation/useGenerateVideoMutation";
import { useAppSelector } from "../../logic/redux/store/hooks";
import ReadySongSection from "../readySongSection/ReadySongSection";
import { abusiveWords } from "../../utils/abusiveWords";
import SongGenerateLoadingModal from "../../components/songGenerateLoadingModal/SongGenerateLoadingModal";
import { I_LyricsTab, I_SongProps } from "../../interface";

const songGenerateValidation = yup.object().shape({
  name: yup
    .string()
    .trim()
    .test("no-invalid-words-after-space", "Beledigende woorden", (value) => {
      if (!value) {
        return true;
      }

      const words = value.split(" ");
      const invalidWordsFound = words.some((word) =>
        abusiveWords.includes(word)
      );

      return !invalidWordsFound;
    })

    .min(3, "Min. 3 karakters")
    .max(30, "Maximaal 30 tekens")
    .required("Naam is een verplicht veld"),
  message: yup
    .string()
    .trim()
    .test("no-invalid-words-after-space", "Beledigende woorden", (value) => {
      if (!value) {
        return true;
      }

      const words = value.split(" ");
      const invalidWordsFound = words.some((word) =>
        abusiveWords.includes(word)
      );

      return !invalidWordsFound;
    })
    .min(20, "Min. 20 karakters")
    .max(100, "Maximaal 100 tekens")
    .required("Bericht is een verplicht veld"),
});

const CreateSongSteps = () => {
  const isUid = useAppSelector((state) => state.userReducer.isUid);
  const [currentForm, setCurrentForm] = useState<number>(0);
  const [isSongGenerateModalOpen, setIsSongGenerateModalOpen] =
    useState<boolean>(false);
  const [isAudioModalOpen, setIsAudioModalOpen] = useState<boolean>(false);
  const [isVideoGenerated, setIsVideoGenerated] = useState<boolean>(false);
  const [isRegenerateVideoLoading, setIsRegenerateVideoLoading] =
    useState<boolean>(true);

  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const [dropDownValue, setDropDownValue] = useState<string>("");
  const [lyricsTab, setLyricsTab] = useState<I_LyricsTab[]>([]);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [formValue, setFormValue] = useState<I_SongProps>({
    name: "",
    message: "",
  });

  const {
    mutateAsync: generateLyricsMutate,
    isLoading: generateLyricsLoading,
  } = useGenerateLyricsMutation();

  const {
    mutateAsync: generateSongMutate,
    isLoading: generateSongLoading,
    data: generateSongData,
  } = useGenerateSongMutation();

  const {
    mutateAsync: generateVideoMutate,
    isLoading: generateVideoLoading,
    data: generateVideoData,
  } = useGenerateVideoMutation();

  const handleNext = (newData: I_SongProps) => {
    setFormValue((pre) => ({ ...pre, ...newData }));
    setCurrentForm((pre) => pre + 1);
  };
  const handleBack = (newData: I_SongProps) => {
    setFormValue((pre) => ({ ...pre, ...newData }));
    setCurrentForm((pre) => pre - 1);
  };

  const handleLyricsGenerate = async (values: I_SongProps) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const paramsData = {
      apikey: apiKey,
      uid: isUid,
      name: values.name,
      relationship: dropDownValue,
      msg: values.message,
    };
    const result = await generateLyricsMutate(paramsData);
    if (result.data.sid) {
      setLyricsTab((prevLyricsTab) => [
        ...prevLyricsTab,
        { sid: result.data.sid, lyrics: result.data.lyrics },
      ]);
    }
  };

  const handleAudioSongGenerate = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const paramsAudioData = {
      apikey: apiKey,
      uid: isUid,
      sid: lyricsTab[activeTab]?.sid,
    };
    setIsSongGenerateModalOpen(true);
    const audioResult = await generateSongMutate(paramsAudioData);
    if (audioResult?.data?.success) {
      setIsSongGenerateModalOpen(false);
      setIsAudioModalOpen(true);
    }
    const paramsVideoData = {
      apikey: apiKey,
      uid: isUid,
      sid: lyricsTab[activeTab]?.sid,
      videoToken: audioResult?.data?.videoToken,
    };
    await generateVideoMutate(paramsVideoData);
  };

  const handleRegenerateVideo = async () => {
    if (generateSongData?.data?.videoToken) {
      const apiKey = import.meta.env.VITE_API_KEY;
      const paramsVideoData = {
        apikey: apiKey,
        uid: isUid,
        sid: lyricsTab[activeTab]?.sid,
        videoToken: generateSongData?.data?.videoToken,
      };
      await generateVideoMutate(paramsVideoData);
    }
  };

  useEffect(() => {
    const regenerateVideo = setInterval(() => {
      handleRegenerateVideo();
    }, 10000);
    if (generateVideoData?.data?.video) {
      setIsRegenerateVideoLoading(false);
      clearInterval(regenerateVideo);
    }
    return () => {
      clearInterval(regenerateVideo);
    };
  }, [generateVideoData, generateSongData]);

  const handleVideoSongGenerate = async () => {
    setIsAudioModalOpen(false);
    setIsVideoGenerated(true);
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const formStep = [
    <GenerateSongSection
      next={handleNext}
      data={formValue}
      validate={songGenerateValidation}
      generateLyricsLoading={generateLyricsLoading}
      handleLyricsGenerate={handleLyricsGenerate}
      isDropDownOpen={isDropDownOpen}
      setIsDropDownOpen={setIsDropDownOpen}
      setDropDownValue={setDropDownValue}
      dropDownValue={dropDownValue}
    />,
    <SongLyricsSection
      back={handleBack}
      data={formValue}
      handleAudioSongGenerate={handleAudioSongGenerate}
      handleLyricsGenerate={handleLyricsGenerate}
      lyricsTab={lyricsTab}
      activeTab={activeTab}
      handleTabClick={handleTabClick}
      setLyricsTab={setLyricsTab}
      generateLyricsLoading={generateLyricsLoading}
      generateSongLoading={generateSongLoading}
    />,
  ];

  return (
    <>
      {isVideoGenerated ? (
        <ReadySongSection
          videoUrl={generateVideoData?.data?.video}
          sid={lyricsTab[activeTab]?.sid}
          name={formValue.name}
        />
      ) : (
        <>
          <div>{formStep[currentForm]}</div>
          <SongGenerateLoadingModal isModalOpen={isSongGenerateModalOpen} />
          <AudioPlayerModal
            audioUrl={generateSongData?.data?.audio}
            isModalOpen={isAudioModalOpen}
            handleVideoSongGenerate={handleVideoSongGenerate}
            generateVideoLoading={generateVideoLoading}
            isRegenerateVideoLoading={isRegenerateVideoLoading}
          />
          <SongGenerateLoadingModal isModalOpen={generateLyricsLoading} />
        </>
      )}
    </>
  );
};

export default CreateSongSteps;
