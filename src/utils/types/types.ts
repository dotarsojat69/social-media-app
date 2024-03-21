export type IResponse<TData = any> = {
  code: number;
  message: string;
  Data: TData;
};
