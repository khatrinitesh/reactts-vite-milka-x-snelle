/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from "react";

export interface I_AudioPlayerModalProps {
  audioUrl: string;
  isModalOpen: boolean;
  handleVideoSongGenerate(): void;
  generateVideoLoading: boolean;
  isRegenerateVideoLoading?: boolean;
}
export interface I_ButtonProps {
  bgColor?: string;
  border?: string;
  onClick?(): void;
  text: string;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  textColor?: string;
  isButtonIcon?: boolean;
  buttonIcon?: ReactElement;
}

export interface I_CheckBoxProps {
  label: JSX.Element;
  id: string;
  name: string;
  value: boolean;
  setFieldValue?: any;
}

export interface I_ErrorModal {
  message: string;
  handleError(): void;
  isModalOpen: boolean;
}

export interface I_InputProps {
  type: string;
  name: string;
  placeholder: string;
  logo?: any;
  isLogo?: boolean;
  handleIconClick?(): void;
  disabled?: boolean;
}

export interface I_LayoutProps {
  children: React.ReactNode;
}

export interface I_SharedModalProps {
  children: React.ReactNode;
  onClickClose(): void;
  bgColor?: string;
  isModalOpen?: boolean;
}

export interface I_SideBarProps {
  setIsSideBarOpen(value: boolean): void;
  setIsVideoModalOpen(value: boolean): void;
}

export interface I_SongGenerateLoadingModalProps {
  isModalOpen: boolean;
}

export interface I_ThankYouModalProps {
  isModalOpen: boolean;
  handleThankyouModal(): void;
}

export interface I_YourCodeModalProps {
  isYourCodeModalOpen: boolean;
  setIsYourCodeModalOpen(value: boolean): void;
}

export interface I_SongProps {
  name: string;
  message: string;
}

export interface I_SongLyricsSectionProps {
  back: any;
  data: any;
  handleLyricsGenerate: any;
  handleAudioSongGenerate: any;
  lyricsTab: any;
  activeTab: number;
  handleTabClick(value: number): void;
  setLyricsTab: any;
  generateLyricsLoading: boolean;
  generateSongLoading: boolean;
}

export interface I_InitialStateProps {
  isLoggedIn: boolean;
  isUid: string;
}

export interface I_RegisterForm {
  code: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  firstCheck: boolean;
  secondCheck: boolean;
}
export interface I_ReadyVideoProps {
  videoUrl: string;
  sid: string;
  name: string;
}

export interface RouteDefinition {
  element: any;
  routes?: RouteDefinition[];
  path: string;
  protected?: boolean;
  redirect?: any;
  title?: string;
  requires?: any;
  pathType?: number;
}

export interface Theme {
  bodyColor: string;
  buttonColor: string;
  lightBlue: string;
  lightGrey: string;
  black: string;
  white: string;
  errorText: string;
  landingWhite: string;
}

export interface I_AdminLoginForm {
  username: string;
  password: string;
}

export interface I_AdminLabelHeadingBox {
  heading: string;
  children: React.ReactNode;
}

export interface I_UserCountCard {
  icon: ReactElement;
  count: string;
  label: string;
}

export interface I_LyricsTab {
  sid: string;
  lyrics: string;
}

export interface I_GenerateSongSection {
  next(values: I_SongProps): void;
  data: I_SongProps;
  validate: any;
  generateLyricsLoading: boolean;
  handleLyricsGenerate(values: I_SongProps): void;
  isDropDownOpen: boolean;
  setIsDropDownOpen(value: boolean): void;
  setDropDownValue(value: string): void;
  dropDownValue: string;
}

export interface I_InfoModal {
  heading: string;
  description: string;
  isInfoModalOpen: boolean;
  setIsInfoModalOpen(value: boolean): void;
}
