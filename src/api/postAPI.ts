import axios from "axios";
import { API_ROUTES, API_URL } from "../constants/apiRoutes";
import type { CreatePostItem, Post, UpdatePost } from "../types/blog";


export async function get(): Promise<Post[]> {
    const res = await axios.get<Post[]>(`${API_URL}${API_ROUTES.GET_POST}`);
    return res.data;
}

export async function create(post: CreatePostItem): Promise<void> {
   await axios.post<Post>(`${API_URL}${API_ROUTES.CREATE_POST}`, post);
}

export async function update(id: number, data : UpdatePost): Promise<void> {
    await axios.put(`${API_URL}${API_ROUTES.UPDATE_POST(id)}`,data, // wrap in JSON
    {
      headers: {
        "Content-Type": "application/json",
      },
    })

}