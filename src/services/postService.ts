import { create, get, update } from "../api/postAPI";
import type { CreatePostItem, Post, UpdatePost } from "../types/blog";

export async function getPosts(): Promise<Post[]> {
  return await get();
}

export async function createPost(post: CreatePostItem): Promise<void> {
  await create(post);
}

export async function updatePost(id: number, data : UpdatePost): Promise<void> {
  await update(id,data);
}
