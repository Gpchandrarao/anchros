import React, { useEffect, useState } from "react";
import NavSuccess from "../NavSuccess";
import createPluse from "../../Assets/createPluse.svg";
import "./index.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [posts, setPorts] = useState([]);
  const [seletedTag, setSeletedTag] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const responce = await axios.get(
          "https://backend-anchors-in.vercel.app/api/posts/getAllPosts"
        );
        setPorts(responce.data);
      } catch (error) {
        console.log("Error from Allpost ", error);
      }
    };
    fetchPost();
  }, []);

  const setBackground = (tagIndex) => {
    return () => {
      setSeletedTag(tagIndex);
    };
  };

  return (
    <div className="disboard">
      <NavSuccess />
      <div className="disboard-container">
        <form className="disboard-form-container">
          <p
            className={`all-post `}
            style={{
              backgroundColor: seletedTag === 0 ? "#404040" : "",
              transition: "backgroundColor 0.5s",
            }}
            onClick={setBackground(0)}
          >
            All post
          </p>
          <p
            className={`all-post `}
            style={{
              backgroundColor: seletedTag === 1 ? "#404040" : "",
              transition: "backgroundColor 0.5s",
            }}
            onClick={setBackground(1)}
          >
            Commented Post
          </p>
          <p
            className={`all-post `}
            style={{
              backgroundColor: seletedTag === 2 ? "#404040" : "",
              transition: "backgroundColor 0.5s",
            }}
            onClick={setBackground(2)}
          >
            Replied Post
          </p>

          <Link to="/createpost" className="link">
            <button type="submit" className="dashbord-btn">
              <img src={createPluse} alt="createPalse" /> Create Post
            </button>
          </Link>
        </form>

        <div className="dashbord-left-container">
          <h1 className="dashbord-post-heading">All Post ({posts.length})</h1>
          {posts.map((eachPost) => (
            <div key={eachPost._id} className="dashbord-post">
              <Link to={`/post/${eachPost._id}`} className="link">
                <h1 className="comment-title">{eachPost.title}</h1>
                <div className="comment-container">
                  <p className="commet-count">
                    {eachPost.commentCount} Commented
                  </p>
                  <p className="commet-count">{eachPost.replyCount} Reply</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
