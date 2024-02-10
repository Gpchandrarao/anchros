import React from "react";
import "./index.css";
import NavSuccess from "../NavSuccess";
import createPluse from "../../Assets/createPluse.svg";

const CreatePost = () => {
  return (
    <div className="createpost">
      <NavSuccess />
      <div className="createpost-container">
        <div>
          <p className="post-headings">All post</p>
          <p className="post-headings">Your Commented Post</p>
          <p className="post-headings">Your Replied Post</p>
          <button className="postbut">
            <img src={createPluse} alt="createPalse" /> Create Post
          </button>
        </div>
        <div className="post-submit">
          <p className="post-submit-heading">Create Post</p>
          <div className="post-submit-input">
            <input
              type="text"
              placeholder="Post Title"
              className="post-input"
            />
            <textarea
              placeholder="Describe your post..."
              className="textarea"
            ></textarea>
            <button type="button" className="post-submit-btn">
              Post Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
