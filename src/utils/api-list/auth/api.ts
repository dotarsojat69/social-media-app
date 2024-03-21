
import { LoginSchema } from "@/utils/api-list/auth/auth-type";
import { IResponse } from "@/utils/types/types";
import axiosWithConfig from "@/utils/api-list/api";

interface LoginData {
  nama: string;
  email: string;
  token: string;
}

export const userLogin = async (body: LoginSchema) => {
  try {
    const response = await axiosWithConfig.post("/login", body);

    console.log("axiosWithConfig terpanggil")
    return response.data as IResponse<LoginData>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
