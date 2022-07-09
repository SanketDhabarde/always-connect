import React, { useRef, useState } from "react";
import { createPost } from "../../features";
import { useDispatch } from "react-redux";
import Picker from "emoji-picker-react";
import "./NewPost.css";
import { useOnClickOutside, useToggle } from "../../hooks";

function NewPost({ toggleModal }) {
  const [postTxt, setPostTxt] = useState("");
  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);
  const dispatch = useDispatch();
  const emojiPickerRef = useRef(null);
  useOnClickOutside(emojiPickerRef, () => setIsEmojiPickerVisible(false));

  const createPostHandler = async () => {
    if (postTxt) {
      const postData = {
        content: postTxt,
      };
      try {
        const res = await dispatch(createPost({ postData }));
        setPostTxt("");
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
          <textarea
            type="text"
            className="input-textbox p-1 input-post"
            value={postTxt}
            onChange={(event) => setPostTxt(event.target.value)}
            placeholder="Enter something..."
          ></textarea>
          <div className="posts-new-options">
            <div className="posts-new-option">
              <div className="icon post-icon center-div">
                <i className="fas fa-image"></i>
              </div>
              <div className="emoji-picker" ref={emojiPickerRef}>
                <div
                  className="icon post-icon center-div"
                  onClick={toggleEmojiPicker}
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
                disabled={postTxt === ""}
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
