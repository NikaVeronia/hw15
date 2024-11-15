import React from "react";
import PostCard from "./components/PostCard/PostCard";
import "./App.css";
import PostData from './PostData.json'; // Импорт JSON файла

interface Post {
  id: number;
  title: string;
  content: string;
}

const App: React.FC = () => {
  const posts: Post[] = PostData
  return (
    <div className="app">
      <h1>Posts</h1>
      <div className="posts-container">
        {posts.map((post) => (
          <PostCard key={post.id} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export default App;
