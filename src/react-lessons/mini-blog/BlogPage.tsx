import React, { useState } from "react";
import PostList from "./PostList";
import { samplePosts } from "./SamplePosts";

const BlogPage: React.FC = () => {
  const [posts] = useState(samplePosts);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default BlogPage;
