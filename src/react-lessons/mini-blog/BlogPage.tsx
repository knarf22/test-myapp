import React, { useEffect, useState } from "react";
import type { Comment, Post } from "../../types/blog";
import { samplePosts } from "./SamplePosts";
import PostList from "./PostList";
import PostModal from "./PostModal";
import { usePost } from "../../hooks/usePost";


const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Record<number, Comment[]>>({});

  const {fetchPosts} = usePost()
  useEffect(() => {
     fetchPosts()
          .then((data) => setPosts(data))
          .catch((err) => console.error("Error fetching todos:", err));
  }, [])
  

  const handleAddComment = (postId: number, text: string) => {
    setComments((prev) => {
      const postComments = prev[postId] || [];
      const newEntry: Comment = {
        id: postComments.length + 1,
        text,
      };
      return {
        ...prev,
        [postId]: [...postComments, newEntry],
      };
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Mini Blog</h1>


      {/* Post List */}
      <PostList posts={posts} onSelectPost={setSelectedPost} />

      {/* Modal */}
      {selectedPost && (
        <PostModal
          post={selectedPost}
          comments={comments[selectedPost.id] || []}
          onClose={() => setSelectedPost(null)}
          onAddComment={(text) => handleAddComment(selectedPost.id, text)}
        />
      )}
    </div>
  );
};

export default BlogPage;
