import axios from "axios";
import { LoginSchema } from "@/utils/auth/auth-type";

// interface LoginPayload {
//   token: string;
// }

export const userLogin = async (body: LoginSchema) => {
  try {
    const response = await axios.post("/login", body);

    return response.data as Response
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
