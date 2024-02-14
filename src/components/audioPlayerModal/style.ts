import styled from "styled-components";
import { theme } from "../../styles/theme";

export const AudioPlayerModalInputSliderContainer = styled.div`
  margin-top: 25px;
  @media screen and (max-width: 480px) {
    margin-top: 20px;
  }
`;

export const MusicRangeInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  &::-webkit-slider-runnable-track {
    background-color: ${theme.white};
    border-radius: 0.5rem;
    height: 1.2px;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    margin-top: -7.5px;
    background-color: ${theme.lightBlue};
    border-radius: 0.5rem;
    height: 1rem;
    width: 1rem;
  }
  &::-moz-range-track {
    background-color: ${theme.white};
    border-radius: 0.5rem;
    height: 1.2px;
  }
  &::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    margin-top: -7.5px;
    background-color: ${theme.lightBlue};
    border-radius: 0.5rem;
    height: 1rem;
    width: 1rem;
  }
`;

export const MusicDurationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3px;
`;

export const MusicDuration = styled.div`
  font-size: 14px;
  font-family: RegularFont;
  color: ${theme.white};
  margin-top: 5px;
`;

export const AudioModalButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  margin-top: 14px;
`;

export const LoadingContainer = styled.span`
  display: inline-block;
  height: 100%;
  width: 35px;
`;

export const AudioPlayerText = styled.div`
  font-size: 18px;
  font-family: RegularFont;
  margin-top: 10px;
  text-align: center;
`;
