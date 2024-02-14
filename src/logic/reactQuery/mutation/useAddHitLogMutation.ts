/* eslint-disable @typescript-eslint/no-explicit-any */

import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosInterceptor";
import { useMutation } from "react-query";

const addHitLog = (options: any) => {
  const url = apiEndPoints?.addHitLog;
  return axiosInstance.post(url, options);
};

export const useAddHitLogMutation = () => {
  return useMutation(addHitLog);
};
