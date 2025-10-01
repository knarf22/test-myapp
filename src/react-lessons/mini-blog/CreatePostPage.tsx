import React from "react";
import type { Post } from "../../types/blog";
import CreatePost from "./CreatePost";

const CreateBlogPage: React.FC = () => {
  const handleAddPost = (newPost: Post) => {
    console.log("New Post Created:", newPost);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create Blog</h1>

      {/* Create Post Form */}
      <CreatePost onAddPost={handleAddPost} />
    </div>
  );
};

export default CreateBlogPage;
