import React, { useRef, useState } from "react";
import { createPost, editPost } from "../../features";
import { useDispatch } from "react-redux";
import Picker from "emoji-picker-react";
import "./NewPost.css";
import { useOnClickOutside } from "../../hooks";
import TextareaAutosize from "react-textarea-autosize";

function NewPost({ toggleModal, singlePost }) {
  const [postTxt, setPostTxt] = useState("" || singlePost?.content);
  const [postTxtCount, setPostTxtCount] = useState(
    250 - singlePost?.content.length || 250
  );
  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);
  const [postImage, setPostImage] = useState(null || singlePost?.postImage);
  const dispatch = useDispatch();
  const emojiPickerRef = useRef(null);
  useOnClickOutside(emojiPickerRef, () => setIsEmojiPickerVisible(false));

  const createPostHandler = async () => {
    if (postTxt || postImage) {
      const postData = {
        content: postTxt,
        postImage,
      };
      try {
        const res = await dispatch(createPost({ postData }));
        setPostTxt("");
        setPostImage(null);
        setPostTxtCount(250);
        if (res) {
          toggleModal();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const editPostHandler = async () => {
    if (postTxt || postImage) {
      const postData = {
        content: postTxt,
        postImage,
      };
      try {
        const res = await dispatch(
          editPost({ postData, postId: singlePost?._id })
        );
        setPostTxt("");
        setPostImage(null);
        setPostTxtCount(250);
        if (res) {
          toggleModal();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onEmojiClick = (_, emojiObject) => {
    const selectedEmoji = emojiObject.emoji;
    setPostTxt((prevText) => prevText + selectedEmoji);
    setPostTxtCount(250 - (postTxt.length + selectedEmoji.length));
  };

  const toggleEmojiPicker = () => {
    setIsEmojiPickerVisible((prevState) => !prevState);
  };

  const handlePostUpload = async (event) => {
    const selectedImage = event.target.files[0];
    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINATY_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const { url } = await response.json();
      setPostImage(url);
    } catch (error) {
      console.log(error);
    }
  };

  const postTextHandler = (event) => {
    const changePostText = event.target.value;
    setPostTxt(changePostText);
    setPostTxtCount(250 - changePostText.length);
  };

  return (
    <>
      <div className="card posts-new p-1">
        <div className="avatar avatar-sm m-1 profile-avatar">
          <img
            src="https://i.pravatar.cc/500"
            alt="avatar"
            className="img-responsive img-round"
          />
        </div>
        <div className="posts-new-input">
          <TextareaAutosize
            minRows={3}
            className="input-textbox p-1 input-post"
            value={postTxt}
            onChange={postTextHandler}
            placeholder="What's happening?"
          />
          {postImage && (
            <div className="post-image">
              <img src={postImage} alt="post" className="img-responsive" />
              <span
                className="icon remove-post-image"
                onClick={() => setPostImage(null)}
              >
                <i className="fas fa-times"></i>
              </span>
            </div>
          )}
          <div className="posts-new-options">
            <div className="posts-new-option">
              <div className="image-picker">
                <label className="center-div">
                  <div
                    className={`icon post-icon center-div  ${
                      postImage && "disabled-element"
                    }`}
                    title="Images"
                  >
                    <i
                      className={`fas fa-image ${
                        postImage && "disabled-element"
                      }`}
                    ></i>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    disabled={postImage}
                    onChange={handlePostUpload}
                  />
                </label>
              </div>
              <div className="emoji-picker" ref={emojiPickerRef}>
                <div
                  className="icon post-icon center-div"
                  onClick={toggleEmojiPicker}
                  title="Emojis"
                >
                  <i className="fas fa-smile"></i>
                </div>
                {isEmojiPickerVisible && <Picker onEmojiClick={onEmojiClick} />}
              </div>
            </div>
            <div className="create-posts">
              <span
                className={`post-txt-count${
                  postTxtCount < 0 ? "-error" : postTxtCount < 10 && "-warning"
                }`}
              >
                {postTxtCount}
              </span>
              {singlePost ? (
                <button
                  className="btn btn-primary"
                  onClick={editPostHandler}
                  disabled={(postTxt === "" && !postImage) || postTxtCount < 0}
                >
                  Update
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={createPostHandler}
                  disabled={(postTxt === "" && !postImage) || postTxtCount < 0}
                >
                  Post
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPost;
