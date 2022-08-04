import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./FollowCard.css";
import { getAllUser, useAuthSlice, useUserSlice } from "../../features";
import User from "../User/User";
import { isFollower } from "../../features/User/utils";

function FollowCard() {
  const { allUser } = useUserSlice();
  const {
    user: { username },
  } = useAuthSlice();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(getAllUser());
        if (response.error) {
          console.log(response.error);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const currUser = allUser?.find((_user) => _user.username === username);

  const suggestedUser = allUser
    ?.filter(
      (_user) =>
        _user.username !== username && !isFollower(currUser, _user)
    )
    .slice(0, 2);

  return (
    <div className="card sidebar card-suggestion">
      <h4 className="p-1 text-center">Suggestions to follow</h4>
      <hr className="separator" />
      <div className="follow-suggestions p-1">
        {suggestedUser?.length > 0 ? (
          suggestedUser.map((user) => (
            <>
              <User user={user} />
              <hr className="separator" />
            </>
          ))
        ) : (
          <div className="center-div text-gray">You followed all the users</div>
        )}
      </div>
    </div>
  );
}

export default FollowCard;
