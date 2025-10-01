import React from "react";
import type { PostListProps } from "../../types/blog";



const PostList: React.FC<PostListProps> = ({ posts, onSelectPost }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white shadow-md rounded-2xl p-5 flex flex-col justify-between hover:shadow-lg transition"
        >
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              {post.body.slice(0, 100)}...
            </p>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>By {post.author}</span>
            <span>{post.date}</span>
          </div>

          <button
            onClick={() => onSelectPost(post)}
            className="cursor-pointer mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Read More
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
