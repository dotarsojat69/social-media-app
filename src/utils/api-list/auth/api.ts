import { LoginSchema, RegisterSchema } from "@/utils/api-list/auth/auth-type";
import { ILogin, IRegister } from "@/utils/types/types";
import axiosWithConfig from "@/utils/api-list/api";

export const userLogin = async (body: LoginSchema) => {
  try {
    const response = await axiosWithConfig.post("/login", body);

    // console.log(response.data);
    return response.data as ILogin;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const userRegister = async (body: RegisterSchema) => {
  try {
    const response = await axiosWithConfig.post("/users", body);

    return response.data as IRegister;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
