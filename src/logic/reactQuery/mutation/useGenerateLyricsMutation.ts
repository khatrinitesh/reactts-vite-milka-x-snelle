/* eslint-disable @typescript-eslint/no-explicit-any */

import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosInterceptor";
import { useMutation } from "react-query";

const generateLyrics = (options: any) => {
  const url = apiEndPoints?.generateLyrics;
  return axiosInstance.post(url, options);
};

export const useGenerateLyricsMutation = () => {
  return useMutation(generateLyrics);
};
