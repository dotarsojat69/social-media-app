import { Response } from "@/utils/types/api";
import { User, UpdateUserSchema } from "./types";
import axiosWithConfig from "../axiosWithConfig";

export const getUser = async (userId: number) => {
  try {
    const response = await axiosWithConfig.get(`/user/${userId}`);

    return response.data as Response<User>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const updateUser = async (body: UpdateUserSchema, userId: number) => {
  try {
    const response = await axiosWithConfig.patch(`/user/${userId}`, body);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deleteUser = async (userId: number) => {
  try {
    const response = await axiosWithConfig.delete(`/user/${userId}`);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};