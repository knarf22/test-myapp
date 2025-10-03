import React from "react";
import type { CreatePostItem } from "../../types/blog";
import CreatePost from "./CreatePost";
import { usePost } from "../../hooks/usePost";

const CreateBlogPage: React.FC = () => {

  const { addPost, loading } = usePost()
  const handleAddPost = (newPost: CreatePostItem) => {
    addPost(newPost)
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create Blog</h1>

      {/* Create Post Form */}
      <CreatePost onAddPost={handleAddPost} isLoading={loading} />
    </div>
  );
};

export default CreateBlogPage;
