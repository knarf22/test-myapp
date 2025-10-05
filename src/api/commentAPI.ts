import axios from "axios";
import type { Comment, CreateCommentItem } from "../types/blog";
import { API_ROUTES, API_URL } from "../constants/apiRoutes";



export async function get(postId : number): Promise<Comment[]> {
    const res = await axios.get<Comment[]>(`${API_URL}${API_ROUTES.GET_COMMENT(postId)}`);
    return res.data;
}

export async function create(comment: CreateCommentItem): Promise<Comment> {
   const res = await axios.post<Comment>(`${API_URL}${API_ROUTES.CREATE_COMMENT}`, comment);
   return res.data;
}