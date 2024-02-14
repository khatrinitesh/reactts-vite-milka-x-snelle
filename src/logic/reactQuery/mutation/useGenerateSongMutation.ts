/* eslint-disable @typescript-eslint/no-explicit-any */

import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosInterceptor";
import { useMutation } from "react-query";

const generateSong = (options: any) => {
  const url = apiEndPoints?.generateSong;
  return axiosInstance.post(url, options);
};

export const useGenerateSongMutation = () => {
  return useMutation(generateSong);
};
