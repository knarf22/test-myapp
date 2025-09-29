// src/constants/apiRoutes.ts
export const API_ROUTES = {
  // ### LOGIN ####
  LOGIN: "/users/login",
  REGISTER: "/users/register",


  // ### TODO ####
  CREATE_TODO: `/api/Todo`,
  GET_TODO: (userId: number) => `/api/Todo/active/${userId}`,
  COMPLETE_TODO: (id: number) => `/api/Todo/${id}/complete`,
  DELETE_TODO: (id: number) => `/api/Todo/${id}`,
  UPDATE_TODO: (id: number) => `/api/Todo/${id}/update`,
  HISTORY_TODO: (id: number) => `/api/Todo/${id}/history`,


  // ### CONTACT MESSAGE ####
  GET_CONTACT_MSG: `/api/ContactMessages`,
  CREATE_CONTACT_MSG: `/api/ContactMessages`,
  UPDATE_CONTACT_MSG: (id: number) => `/api/ContactMessages/${id}/status`,


};
export const API_URL = import.meta.env.VITE_API_URL ?? "https://localhost:5001";
