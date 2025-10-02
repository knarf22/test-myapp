import { useState } from "react";
import { createPost, getPosts, updatePost } from "../services/postService";
import type { Post, UpdatePost } from "../types/blog";

export function usePost() {
  const [loading, setLoading] = useState(false);

  const fetchPosts = async (): Promise<Post[]> => {
    setLoading(true);
    try {
      return await getPosts();
    } finally {
      setLoading(false);
    }
  };

  const addPost = async (contactMsg: Post): Promise<void> => {
    setLoading(true);
    try {
      return await createPost(contactMsg);
    } finally {
      setLoading(false);
    }
  };

  const editPost = async (id: number, data: UpdatePost): Promise<void> => {
    setLoading(true);
    try {
      await updatePost(id, data);
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchPosts,
    addPost,
    editPost,
    loading,
  };
}
