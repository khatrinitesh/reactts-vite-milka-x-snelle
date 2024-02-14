/* eslint-disable @typescript-eslint/no-explicit-any */

import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosInterceptor";
import { useMutation } from "react-query";

const generateVideo = (options: any) => {
  const url = apiEndPoints?.generateVideo;
  return axiosInstance.post(url, options);
};

export const useGenerateVideoMutation = () => {
  return useMutation(generateVideo);
};
