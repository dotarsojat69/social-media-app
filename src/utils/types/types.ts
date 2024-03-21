export type IResponse<TPayload = any> = {
  message: string;
  payload: TPayload;
};
