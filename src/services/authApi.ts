import axiosInstance from "./axiosInstance";
import {
  LoginPayload,
  RegisterPayload,
  AuthResponse,
} from "@/types/auth.types";

export const registerUser = (
  data: RegisterPayload
) => {
  return axiosInstance.post<AuthResponse>(
    "/auth/register",
    data
  );
};

export const loginUser = (
  data: LoginPayload
) => {
  return axiosInstance.post<AuthResponse>(
    "/auth/login",
    data
  );
};