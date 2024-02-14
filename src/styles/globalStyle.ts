import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import MillerRegular from "../assets/fonts/Miller-RegularFont.otf";
import Regular from "../assets/fonts/GoodHeadlinePro-Regular.otf";
import SemiBold from "../assets/fonts/GoodHeadlinePro-Bold.otf";
import GoBold from "../assets/fonts/Gobold-Bold.otf";
import StachBold from "../assets/fonts/Stash-Bold.otf";

export const GlobalStyles = createGlobalStyle`
body{
  color:${theme.white};
    transition: all linear 0.2s;
   background-color: ${theme.bodyColor};
    min-height: 100vh;
}
scrollbar-width: thin;
  scrollbar-color: #8bd1f0 #f5f5f5;

  ::-webkit-scrollbar {
    width: 8px;
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #8bd1f0;
    border-radius: 4px;
    cursor: pointer;
  }

  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 4px;
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    width: 8px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8bd1f0; 
    border-radius: 4px; 
  }

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 4px;
  }

.datepicker-wrapper{
  width: 100%;
}
.react-datepicker__header {
  background-color: #7d69ac!important;
  color: #fff!important;
}
.react-datepicker__current-month{
  color: #fff!important;
}
.react-datepicker__day-name{
  color: #fff!important;
}

.react-datepicker__month-dropdown{
  background-color: #7d69ac!important;
}
.react-datepicker__year-dropdown{
  background-color: #7d69ac!important;
}
.react-datepicker__day--selected{
  background-color: #3b2774!important;
}
.react-datepicker{
  border: none!important;
  font-size: 1rem!important;
}

.input-textarea{
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 16px;
  font-family: RegularFont;
  box-sizing: border-box;
  background-color: #fff;
  color: #000;
  resize: none;
  &:disabled{
    opacity: 0.7;
    cursor: not-allowed;
  }
}

@font-face {
  font-family: MillerRegularFont;
  src: url(${MillerRegular});
  font-weight: 400;
}
@font-face {
  font-family: RegularFont;
  src: url(${Regular});
  font-weight: 400;
}
@font-face {
  font-family: SemiBoldFont;
  src: url(${SemiBold});
  font-weight: 600;
}
@font-face {
  font-family: GoBoldFont;
  src: url(${GoBold});
  font-weight: 600;
}
@font-face {
  font-family: StachBoldFont;
  src: url(${StachBold});
  font-weight: 600;
}
`;
