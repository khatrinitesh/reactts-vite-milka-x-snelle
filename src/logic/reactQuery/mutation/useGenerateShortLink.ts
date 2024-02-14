/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "../../../utils/axiosInterceptor";
import { useMutation } from "react-query";

const generateShortLink = (options: any) => {
  const url = `https://shortn.fyi/Index.aspx/getShortLink`;
  return axiosInstance.post(url, options);
};

export const useGenerateShortLinkMutation = () => {
  return useMutation(generateShortLink);
};
