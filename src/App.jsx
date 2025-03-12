import { useState } from "react";
import "./App.css";
import Post from "./Post.jsx";
import CreatePost from "./CreatePost.jsx";
import Data from "./data.json";
import logo from "./reddit-logo-white.png";

function App() {
  const [posts, setPosts] = useState(Data);

  const generatePosts = () => {
    return posts.map((post) => (
      <div key={post.id}>
        <Post
          postInfo={{
            ...post,
            isLiked: post.isLiked || false,
            isUser: post.isUser || false,
          }}
          removePost={removePost}
        />
      </div>
    ));
  };

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <>
      <div className="header">
        <img src={logo} className="headerLogo" />
        <h3>Social City</h3>
        <h4>
          Welcome <span>Justin</span>
        </h4>
      </div>
      <div>
        <h2>Create Post</h2>
        <CreatePost addPost={addPost} />
        <h2>Recent Posts</h2>
        {generatePosts()}
      </div>
    </>
  );
}

export default App;
