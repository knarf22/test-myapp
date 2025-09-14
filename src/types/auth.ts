
export interface UserLoginRequest {
  username: string;
  password: string;
}

export interface UserLoginResponse {
  userId: number;
  username: string;
  token: string;
}

export interface UserRegisterRequest {
  username: string;
  password: string;
  confirmPassword: string;
}

export interface UserRegisterResponse {
  userId: number;
  username: string;
}