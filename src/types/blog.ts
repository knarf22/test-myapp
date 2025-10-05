export interface Post {
  postId: number;
  title: string;
  body: string;
  username: string;
  date: string;
  comments: Comment[]; // 👈 added

}

export interface UpdatePost {
  title: string;
  body: string;
}



export interface PostModalProps {
  post: Post;
  onClose: () => void;
  onUpdateComments: (postId: number, updated: Comment[]) => void;

}

export interface PostListProps {
  posts: Post[];
  onSelectPost: (post: Post) => void;
}

export interface CreatePostItem {
  userId: number;
  title: string;
  body: string;
}

export interface CreateCommentItem {
  postId: number;
  userId: number;
  text: string;
}

export interface Comment {
  commentId: number;
  text: string;
  username: string | null;
}

export interface CreatePostProps {
  onAddPost: (post: CreatePostItem) => void;
  isLoading: boolean
}
