
export interface UserLoginRequest {
  username: string;
  password: string;
}

export interface UserLoginResponse {
  userId: number;
  username: string;
  token: string;
}
