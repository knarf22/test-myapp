import React, { useEffect, useState, useRef } from "react";
import type { Comment, CreateCommentItem, PostModalProps } from "../../types/blog";
import { useComment } from "../../hooks/useComment";
import { getUser } from "../../utils/getUser";

const PostModal: React.FC<PostModalProps> = ({
  post,
  onClose,
  onUpdateComments,
}) => {
  const [newComment, setNewComment] = useState("");
  const [localComments, setLocalComments] = useState<Comment[]>(post.comments || []);
  const modalRef = useRef<HTMLDivElement>(null); // 👈 reference to modal content

  const { addComment, loading } = useComment();
  const { userId, username } = getUser();

  // ✅ Sync comments to parent
  useEffect(() => {
    onUpdateComments(post.postId, localComments);
  }, [localComments]);

  // ✅ Close when clicking outside modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleSubmit = async () => {
    if (newComment.trim() === "") return;

    const newPost: CreateCommentItem = {
      postId: post.postId,
      userId,
      text: newComment.trim(),
    };

    const optimisticComment: Comment = {
      commentId: Date.now(),
      username,
      text: newComment.trim(),
    };

    setLocalComments((prev) => [...prev, optimisticComment]);
    setNewComment("");

    const result = await addComment(newPost);
    if (!result) {
      setLocalComments((prev) =>
        prev.filter((c) => c.commentId !== optimisticComment.commentId)
      );
    } else {
      setLocalComments((prev) =>
        prev.map((c) =>
          c.commentId === optimisticComment.commentId ? result : c
        )
      );
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/70 flex items-center justify-center z-50">
      {/* This is the modal content wrapper */}
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 transform transition-all duration-300 relative"
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
          <button
            onClick={onClose}
            className="cursor-pointer text-gray-500 hover:text-gray-700 text-2xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[50vh] overflow-y-auto">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {post.body}
          </p>
        </div>

        {/* Footer */}
        <div className="border-t p-4 text-sm text-gray-500">
          <div className="flex justify-between">
            <span>By {post.username}</span>
            <span>{post.date}</span>
          </div>

          {/* Comments */}
          <div className="mt-4">
            <h3 className="text-base font-semibold text-gray-800 mb-2">
              Comments
            </h3>

            <div className="space-y-2 mb-3">
              {localComments.length > 0 ? (
                localComments.map((c) => (
                  <div
                    key={c.commentId}
                    className="p-2 bg-gray-100 rounded-md text-gray-700"
                  >
                    {c.username} : &nbsp;{c.text}
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500 italic">
                  No comments yet. Be the first!
                </p>
              )}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSubmit}
                className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                {loading ? "Loading..." : "Comment"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
