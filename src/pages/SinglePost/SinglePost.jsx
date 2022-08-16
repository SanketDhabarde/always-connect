import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FollowCard, Sidebar } from "../../components";
import { addComment, Comment, Post } from "../../features";
import { useTitle } from "../../hooks";
import "./SinglePost.css";

function SinglePost() {
  const [comment, setComment] = useState("");
  const [commentLength, setCommentLength] = useState(200);
  const [selectedPost, setSelectedPost] = useState(null);
  const dispatch = useDispatch();
  const { postId } = useParams();
  const navigate = useNavigate();
  useTitle("Post");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios(`/api/posts/${postId}`);
        setSelectedPost(data?.post);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [postId]);

  const comments = selectedPost?.comments ?? [];

  const commentHandler = (event) => {
    const changeComment = event.target.value;
    setComment(changeComment);
    setCommentLength(200 - changeComment.length);
  };

  const backPageHandler = () => {
    navigate(-1); //navigate to prev page
  };

  const initializeState = () => {
    setComment("");
    setCommentLength(200);
  };

  const postCommentHandler = async (event) => {
    event.preventDefault();
    const commentData = {
      text: comment,
    };
    dispatch(addComment({ postId: selectedPost._id, commentData }));
    initializeState();
  };

  return (
    <div className="container my-2">
      <Sidebar />
      <div className="card container-card single-post px-3">
        <div className="go-back">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={backPageHandler}
          >
            <i className="fas fa-backward"></i> Go back
          </button>
        </div>
        {selectedPost && <Post post={selectedPost} />}
        <div className="comments-container">
          <form onSubmit={postCommentHandler}>
            <div className="comment-input">
              <input
                type="text"
                value={comment}
                onChange={commentHandler}
                className="input-textbox p-1 w-100"
                placeholder="Enter your reply"
              />
            </div>
            <div className="comment-submit px-1 my-1">
              <span
                className={`post-txt-count${
                  commentLength < 0
                    ? "-error"
                    : commentLength < 10 && "-warning"
                }`}
              >
                {commentLength}
              </span>
              <button
                className="btn btn-primary btn-sm"
                type="submit"
                disabled={comment === "" || comment.length > 200}
              >
                Reply
              </button>
            </div>
          </form>
        </div>
        <div className="comments-listing my-2">
          {comments?.map((comment) => (
            <Comment
              comment={comment}
              key={comment._id}
              postId={selectedPost._id}
            />
          ))}
        </div>
      </div>
      <FollowCard />
    </div>
  );
}

export default SinglePost;
