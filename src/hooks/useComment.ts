import { useState } from "react";
import type { Comment, CreateCommentItem } from "../types/blog";
import { createComment, getComments } from "../services/commentService";

export function useComment() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchComments = async (postId: number): Promise<Comment[]> => {
    setLoading(true);
    setError(null);
    try {
      return await getComments(postId);
    } catch (err: any) {
      console.error("Error fetching comments:", err);
      setError(err.message ?? "Failed to fetch comments");
      return []; // return empty array to avoid breaking UI
    } finally {
      setLoading(false);
    }
  };

  const addComment = async (comment: CreateCommentItem): Promise<Comment | null> => {
    setLoading(true);
    setError(null);
    try {
      return await createComment(comment);
    } catch (err: any) {
      console.error("Error adding comment:", err);
      setError(err.message ?? "Failed to add comment");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchComments,
    addComment,
    loading,
    error,
  };
}
