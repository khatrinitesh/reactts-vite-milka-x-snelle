/* eslint-disable @typescript-eslint/no-explicit-any */

import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosInterceptor";
import { useMutation } from "react-query";

const setFlag = (options: any) => {
  const url = apiEndPoints?.setFlag;
  return axiosInstance.post(url, options);
};

export const useSetFlagMutation = () => {
  return useMutation(setFlag);
};
