import React, { useState } from "react";
import type { CreatePostItem, CreatePostProps } from "../../types/blog";
import { getUser } from "../../utils/getUser";



const CreatePost: React.FC<CreatePostProps> = ({ onAddPost, isLoading = false }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { userId } = getUser();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

    const newPost: CreatePostItem = {
      userId  : userId,
      title: title.trim(),
      body: body.trim()
    };

    onAddPost(newPost);

    // reset
    setTitle("");
    setBody("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-2xl p-6 mb-8"
    >
      <h2 className="text-xl font-bold mb-4 text-gray-800">Create New Post</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <textarea
          placeholder="Post Content"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={5}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="cursor-pointer px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {isLoading ? "Loading" : "Publish Post"}
      </button>
    </form>
  );
};

export default CreatePost;
