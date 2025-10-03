export interface Post {
  id: number;
  title: string;
  body: string;
  username: string;
  date: string;
}

export interface UpdatePost {
  title: string;
  body: string;
}


export interface Comment {
  id: number;
  text: string;
}

export interface PostModalProps {
  post: Post;
  comments: Comment[];
  onClose: () => void;
  onAddComment: (text: string) => void;
}

export interface PostListProps {
  posts: Post[];
  onSelectPost: (post: Post) => void;
}

export interface CreatePostItem {
  userId : number;
  title : string;
  body : string;
}

export interface CreatePostProps {
  onAddPost: (post: CreatePostItem) => void;
  isLoading : boolean
}
