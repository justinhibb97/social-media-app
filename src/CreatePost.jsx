import React from "react";

const CreatePost = ({ addPost }) => {
  const [postText, setPostText] = React.useState("");
  const [currentDate, setCurrentDate] = React.useState("");

  const getCurrentDateTime = () => {
    const date = new Date();
    const fullDateTime = date.toLocaleString();
    return fullDateTime;
  };

  React.useEffect(() => {
    setCurrentDate(getCurrentDateTime());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postText.trim()) {
      const currentDate = getCurrentDateTime();
      addPost({
        id: Math.random(),
        author: "You",
        text: postText,
        timestamp: currentDate,
        isUser: true,
      });
    }
    setPostText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            className="postText"
            type="text"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            placeholder="Write your post here..."
          ></textarea>
        </div>
        <input className="submitPost" type="submit" />
      </form>
    </div>
  );
};

export default CreatePost;
