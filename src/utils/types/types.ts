export type ILogin<LoginData = any> = {
  code: number;
  message: string;
  data: LoginData;
};

export type LoginData = {
  nama: string;
  email: string;
  token: string;
}

export type IRegister = {
  code: number;
  message: string;
};
