import React, { useEffect, useState } from "react";
import NavSuccess from "../NavSuccess";
import { Link, useParams } from "react-router-dom";
import createPluse from "../../Assets/createPluse.svg";
import "./index.css";
import axios from "axios";

const PostViwe = () => {
  const [post, setPosts] = useState([]);
  // const [comments, setComments] = useState([]);
  console.log(post);
  const [newComment, setNewComment] = useState("");
  const [replayInpus, setReplayInpus] = useState({});

  const { postId } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const responce = await axios.get(
          `https://backend-anchors-in.vercel.app/api/posts/${postId}`
        );
        setPosts(responce.data);
      } catch (error) {
        console.log("Error from FetchPosts", error);
      }
    };
    fetchPost();
  }, [postId, newComment, replayInpus]);

  // const reposns = post.comments.map((eachComments) => ({
  //   title: eachComments.title,
  //   description: eachComments.description,
  //   replyCount: eachComments.replyCount,
  // }));

  // setComments(reposns);

  // const headleInputChange = (e, commenId) => {
  //   const { value } = e.target;
  //   setReplayInpus((prevState) => ({
  //     ...prevState,
  //     [commenId]: value,
  //   }));
  // };
  const [seletedTag, setSeletedTag] = useState(0);
  const setBackground = (tagIndex) => {
    return () => {
      setSeletedTag(tagIndex);
    };
  };

  return (
    <div className="viwe-posts">
      <NavSuccess />
      <div className="post-Viwe-container">
        <div className="post-viwe-form-container">
          <p
            className={`all-view-post `}
            style={{
              backgroundColor: seletedTag === 0 ? "#404040" : "",
              transition: "backgroundColor 0.5s",
            }}
            onClick={setBackground(0)}
          >
            All post
          </p>
          <p
            className={`all-view-post `}
            style={{
              backgroundColor: seletedTag === 1 ? "#404040" : "",
              transition: "backgroundColor 0.5s",
            }}
            onClick={setBackground(1)}
          >
            Commented Post
          </p>
          <p
            className={`all-view-post `}
            style={{
              backgroundColor: seletedTag === 2 ? "#404040" : "",
              transition: "backgroundColor 0.5s",
            }}
            onClick={setBackground(2)}
          >
            Replied Post
          </p>

          <Link to="/createpost" className="link">
            <button type="submit" className="view-btn">
              <img src={createPluse} alt="createPalse" /> Create Post
            </button>
          </Link>
        </div>

        <div className="post-view-left">
          <h1>All post </h1>
          {post && (
            <div>
              <h1>{post.title}</h1>
              <p>{post.description}</p>
              <div>
                <p></p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default PostViwe;
