import React from "react";
import logo from "./reddit-logo-white.png";
import "./App.css";

const Post = ({ postInfo, removePost }) => {
  const [isLiked, setIsLiked] = React.useState(postInfo.isLiked);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleRemove = () => {
    removePost({ id: postInfo.id });
  };

  return (
    <div key={postInfo.id} className="postCard">
      <div className="nameCard">
        <img src={logo} className="profileLogo" />
        <h3>@{postInfo.author}</h3>
        <h4> • {postInfo.timestamp}</h4>
      </div>
      <div className="textCard">
        <div className="nameCard">
          <p>{postInfo.text}</p>
        </div>
        <div className="likeCard">
          {isLiked ? (
            <button className="likeOn" onClick={toggleLike} Y>
              ♥ +1
            </button>
          ) : (
            <button className="likeOff" onClick={toggleLike}>
              ♡ Like
            </button>
          )}
          <div>
            {postInfo.isUser ? (
              <button className="remove" onClick={handleRemove}>
                Remove Post
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
