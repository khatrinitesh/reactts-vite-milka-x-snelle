/* eslint-disable @typescript-eslint/no-explicit-any */

import { apiEndPoints } from "../../../utils/apiUrl";
import { axiosInstance } from "../../../utils/axiosInterceptor";
import { useMutation } from "react-query";

const registerForm = (options: any) => {
  const url = apiEndPoints?.register;
  return axiosInstance.post(url, options);
};

export const useRegisterFormMutation = () => {
  return useMutation(registerForm);
};
