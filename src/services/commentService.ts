import { create, get } from "../api/commentAPI";
import type { Comment, CreateCommentItem } from "../types/blog";



export async function getComments(postId : number): Promise<Comment[]> {
  return await get(postId);
}

export async function createComment(post: CreateCommentItem): Promise<Comment> {
  return await create(post);
}