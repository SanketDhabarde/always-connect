import React, { useRef, useState } from "react";
import { createPost } from "../../features";
import { useDispatch } from "react-redux";
import Picker from "emoji-picker-react";
import "./NewPost.css";
import { useOnClickOutside } from "../../hooks";
import TextareaAutosize from 'react-textarea-autosize';

function NewPost({ toggleModal }) {
  const [postTxt, setPostTxt] = useState("");
  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);
  const [postImage, setPostImage] = useState(null);
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
        if (res) {
          toggleModal();
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const onEmojiClick = (_, emojiObject) => {
    const selectedEmoji = emojiObject.emoji;
    setPostTxt((prevText) => prevText + selectedEmoji);
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
            onChange={(event) => setPostTxt(event.target.value)}
            placeholder="What's happening?"
          />
          {postImage && <img src={postImage} alt="post" className="img-responsive"/>}
          <div className="posts-new-options">
            <div className="posts-new-option">
              <div className="image-picker">
                <label className="center-div">
                  <div className="icon post-icon center-div" title="Images">
                    <i className="fas fa-image"></i>
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
              <button
                className="btn btn-primary"
                onClick={createPostHandler}
                disabled={postTxt === "" && !postImage}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPost;
