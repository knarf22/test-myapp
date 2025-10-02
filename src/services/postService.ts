import { create, get, update } from "../api/postAPI";
import type { Post, UpdatePost } from "../types/blog";

export async function getPosts(): Promise<Post[]> {
  return await get();
}

export async function createPost(post: Post): Promise<void> {
  await create(post);
}

export async function updatePost(id: number, data : UpdatePost): Promise<void> {
  await update(id,data);
}
