import React, { useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  author: string;
  date: string;
}

interface Comment {
  id: number;
  text: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Record<number, Comment[]>>({});
  const [newComment, setNewComment] = useState("");

  console.log("comments",comments)
  console.log("newComment",newComment)


  const openPost = (post: Post) => setSelectedPost(post);
  const closePost = () => {
    setSelectedPost(null);
    setNewComment("");
  };

  const handleAddComment = () => {
    if (!selectedPost || newComment.trim() === "") return;

    setComments((prev) => {
      const postComments = prev[selectedPost.id] || [];
      const newEntry: Comment = {
        id: postComments.length + 1,
        text: newComment.trim(),
      };
      return {
        ...prev,
        [selectedPost.id]: [...postComments, newEntry],
      };
    });

    setNewComment("");
  };

  return (
    <>
      {/* Grid of posts */}
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
              onClick={() => openPost(post)}
              className="cursor-pointer mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 transform transition-all duration-300 relative">
            {/* Header */}
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-xl font-bold text-gray-800">
                {selectedPost.title}
              </h2>
              <button
                onClick={closePost}
                className="cursor-pointer text-gray-500 hover:text-gray-700 text-2xl leading-none"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-6 max-h-[50vh] overflow-y-auto">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedPost.body}
              </p>
            </div>

            {/* Footer with Author + Date */}
            <div className="border-t p-4 text-sm text-gray-500">
              <div className="flex justify-between">
                <span>By {selectedPost.author}</span>
                <span>{selectedPost.date}</span>
              </div>

              {/* Comments Section */}
              <div className="mt-4">
                <h3 className="text-base font-semibold text-gray-800 mb-2">
                  Comments
                </h3>

                {/* Existing Comments */}
                <div className="space-y-2 mb-3">
                  {(comments[selectedPost.id] || []).map((c) => (
                    <div
                      key={c.id}
                      className="p-2 bg-gray-100 rounded-md text-gray-700"
                    >
                      {c.text}
                    </div>
                  ))}
                  {(comments[selectedPost.id] || []).length === 0 && (
                    <p className="text-sm text-gray-500 italic">
                      No comments yet. Be the first!
                    </p>
                  )}
                </div>

                {/* Add Comment */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleAddComment}
                    className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostList;
