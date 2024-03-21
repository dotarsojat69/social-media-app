import axios from "axios";
import { LoginSchema } from "@/utils/api-list/auth/auth-type";
import { IResponse } from "@/utils/types/types";

interface LoginPayload {
  token: string;
}

export const userLogin = async (body: LoginSchema) => {
  try {
    const response = await axios.post("/login", body);

    return response.data as IResponse<LoginPayload>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
