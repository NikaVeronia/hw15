import React, { useState } from "react";
import "./PostCard.css";

interface PostCardProps {
  title: string;
  content: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, content }) => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  return (
    <div className="post-card">
      <div className="post-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <button
        className="menu-toggle"
        onClick={() => setMenuVisible(!menuVisible)}
      >
        ⋮
      </button>
      {menuVisible && (
        <div className="menu">
          <button>Edit</button>
          <button>Delete</button>
          <button>Favorite</button>
        </div>
      )}
    </div>
  );
};

export default PostCard;
