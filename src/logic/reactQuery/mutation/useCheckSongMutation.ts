/* eslint-disable @typescript-eslint/no-explicit-any */

import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosInterceptor";
import { useMutation } from "react-query";

const checkSongs = (options: any) => {
  const url = apiEndPoints?.checkSongs;
  return axiosInstance.post(url, options);
};

export const useCheckSongsMutation = () => {
  return useMutation(checkSongs);
};
