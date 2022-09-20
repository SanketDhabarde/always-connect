import React from "react";
import { useState } from "react";
import { useReducer } from "react";
import { useDispatch } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";
import { Input } from "../../../../components";
import { editUserProfile } from "../../userSlice";
import "./EditProfile.css";

const editReducer = (state, { type, payload }) => {
  switch (type) {
    case `${type}`:
      return {
        ...state,
        [type]: payload,
      };
    default:
      return state;
  }
};

function EditProfile({ userProfile, toggleModal }) {
  const [editState, editDispatch] = useReducer(editReducer, {
    firstName: userProfile.firstName,
    lastName: userProfile.lastName,
    profileLink: userProfile.profileLink,
    bio: userProfile.bio,
  });
  const [profileImg, setProfileImg] = useState(userProfile.profileImg);
  const [profileBanner, setProfileBanner] = useState(userProfile.profileBanner);
  const dispatch = useDispatch();

  const { firstName, lastName, profileLink, bio } = editState;

  const inputChangeHandler = (type, event) => {
    editDispatch({ type, payload: event.target.value });
  };

  const handleImageUpload = async (event, profileFor) => {
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
      profileFor === "profileImg" ? setProfileImg(url) : setProfileBanner(url);
    } catch (error) {
      console.log(error);
    }
  };

  const editProfileHandler = async (event) => {
    event.preventDefault();
    toggleModal();
    const userData = {
      ...editState,
      profileBanner,
      profileImg,
    };
    try {
      const res = await dispatch(editUserProfile({ userData }));
      if (res.error) {
        console.log(res.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card w-100 profile-header edit-profile-container">
      <div className="profile-banner">
        <img
          src={profileBanner}
          alt="avatar"
          className="img-responsive profile-bannner-image"
        />
        <label className="center-div">
          <div
            className={`icon post-icon banner-edit-icon center-div`}
            title="Update Image"
          >
            <i className={`fas fa-plus-circle`}></i>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => handleImageUpload(event, "profileBanner")}
          />
        </label>
        <div className="profile-image">
          <div className="avatar avatar-md m-1 profile-avatar">
            <img
              src={profileImg}
              alt="avatar"
              className="img-responsive img-round"
            />
            <label className="center-div">
              <div
                className={`icon post-icon profile-edit-icon center-div`}
                title="Update Image"
              >
                <i className={`fas fa-plus-circle`}></i>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={(event) => handleImageUpload(event, "profileImg")}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="profile-container px-1">
        <form className="form-edit" onSubmit={editProfileHandler}>
          <div className="form-group my-2">
            <Input
              label="First Name"
              type="text"
              value={firstName}
              changeHandler={(event) => inputChangeHandler("firstName", event)}
              class_name="input-textbox p-1 my-1"
              placeholder="Enter first name"
              required={true}
            />
          </div>
          <div className="form-group my-2">
            <Input
              label="Last Name"
              type="text"
              value={lastName}
              changeHandler={(event) => inputChangeHandler("lastName", event)}
              class_name="input-textbox p-1 my-1"
              placeholder="Enter last name"
              required={true}
            />
          </div>
          <div className="form-group my-2">
            <Input
              label="Profile URL"
              type="text"
              value={profileLink}
              class_name="input-textbox p-1 my-1"
              changeHandler={(event) =>
                inputChangeHandler("profileLink", event)
              }
              placeholder="Enter your profile url"
            />
          </div>
          <div className="form-group my-2">
            Bio
            <TextareaAutosize
              minRows={3}
              className="input-textbox p-1 my-1"
              value={bio}
              onChange={(event) => inputChangeHandler("bio", event)}
              placeholder="Enter your bio"
            />
          </div>
          <div className="form-buttons">
            <div className="edit-form-buttons">
              <button className="btn btn-secondary" onClick={toggleModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
