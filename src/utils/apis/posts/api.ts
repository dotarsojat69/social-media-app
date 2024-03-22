import { Response, ResponsePagination } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { PostPayloadSchema } from "./types";


export const getPosts = async () => {
  try {
    const response = await axiosWithConfig.get('/posting');

    return response.data as ResponsePagination;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getDetailPosts = async (post_id: string) => {
  try {
    const response = await axiosWithConfig.get(`/posting/${post_id}`);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const addPosts = async (body: PostPayloadSchema) => {
  try {
    const response = await axiosWithConfig.post(`/posting`, body);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const editPosts = async (postingId: string, body: PostPayloadSchema) => {
  try {
    const response = await axiosWithConfig.put(`/posting/${postingId}`, body);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deletePosts = async (postingId: string) => {
  try {
    const response = await axiosWithConfig.delete(`/posting/${postingId}`);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
