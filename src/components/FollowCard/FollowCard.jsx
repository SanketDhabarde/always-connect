import React from "react";
import { Link } from "react-router-dom";
import "./FollowCard.css";

function FollowCard() {
  return (
    <div className="card sidebar card-suggestion">
      <h4 className="p-1 text-center">Suggestions to follow</h4>
      <hr className="separator" />
      <div className="follow-suggestions">
        <div className="follow-suggestion p-1">
          <div className="profile-info">
            <div className="avatar avatar-sm m-1 profile-avatar">
              <img
                src="https://i.pravatar.cc/500"
                alt="avatar"
                className="img-responsive img-round"
              />
            </div>
            <div className="profile-name">
              <p>John Doe</p>
              <small className="text-gray">@johndoe</small>
            </div>
          </div>
          <div className="follow-btn">
            <Link to="#" className="btn-underline">
              Follow +{" "}
            </Link>
          </div>
        </div>
        <div className="follow-suggestion p-1">
          <div className="profile-info">
            <div className="avatar avatar-sm m-1 profile-avatar">
              <img
                src="https://i.pravatar.cc/500"
                alt="avatar"
                className="img-responsive img-round"
              />
            </div>
            <div className="profile-name">
              <p>John Doe</p>
              <small className="text-gray">@johndoe</small>
            </div>
          </div>
          <div className="follow-btn">
            <Link to="#" className="btn-underline">
              Follow +{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowCard;
