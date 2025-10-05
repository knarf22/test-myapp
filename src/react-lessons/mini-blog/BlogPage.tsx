import React, { useEffect, useState } from "react";
import type { Post, Comment } from "../../types/blog";
import PostList from "./PostList";
import PostModal from "./PostModal";
import { usePost } from "../../hooks/usePost";

const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const { fetchPosts } = usePost();

  useEffect(() => {
    fetchPosts()
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  // ✅ persist updated comments in parent
  const handleUpdateComments = (postId: number, updatedComments: Comment[]) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.postId === postId ? { ...p, comments: updatedComments } : p
      )
    );

    // if modal is open for same post, also update selectedPost
    if (selectedPost?.postId === postId) {
      setSelectedPost((prev) =>
        prev ? { ...prev, comments: updatedComments } : prev
      );
    }
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
          onClose={() => setSelectedPost(null)}
          onUpdateComments={handleUpdateComments} // ✅ added prop
        />
      )}
    </div>
  );
};

export default BlogPage;
