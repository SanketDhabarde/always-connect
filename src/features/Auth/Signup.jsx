import React, { useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components";
import "./Auth.css";
import { useTitle } from "../../hooks";
import { useDispatch } from "react-redux";
import { signupUser, useAuthSlice } from "./authSlice";

const signupFormReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_USERNAME":
      return {
        ...state,
        username: payload,
      };
    case "SET_FIRST_NAME":
      return {
        ...state,
        firstName: payload,
      };
    case "SET_LAST_NAME":
      return {
        ...state,
        lastName: payload,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: payload,
      };
    case "SET_CONFIRM_PASSWORD":
      return {
        ...state,
        confirmPassword: payload,
      };
    default:
      return state;
  }
};

function Signup() {
  const [state, dispatch] = useReducer(signupFormReducer, {
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const [togglePassword, setTogglePassword] = useState(false);
  const { username, firstName, lastName, password, confirmPassword } = state;
  const { authError } = useAuthSlice();
  const dispatchSignUp = useDispatch();
  const navigate = useNavigate();
  useTitle("Signup");

  const signupHandler = async (event) => {
    event.preventDefault();
    const res = await dispatchSignUp(
      signupUser({ username, firstName, lastName, password })
    );
    if (res?.payload.createdUser) {
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="px-2">
      <main className="center-div mt-2">
        <div className="card auth-card card-shadow m-1">
          <div className="card-section">
            <div className="card-header p-2">
              <h3 className="center-div">Signup</h3>
              <form onSubmit={signupHandler}>
                <div className="form-group my-2">
                  <Input
                    label="Username"
                    type="text"
                    class_name="input-textbox p-1"
                    placeholder="Enter username"
                    value={username}
                    changeHandler={(event) =>
                      dispatch({
                        type: "SET_USERNAME",
                        payload: event.target.value,
                      })
                    }
                    required={true}
                  />
                </div>
                <div className="form-group my-2">
                  <Input
                    label="First Name"
                    type="text"
                    class_name="input-textbox p-1"
                    placeholder="Enter first name"
                    value={firstName}
                    changeHandler={(event) =>
                      dispatch({
                        type: "SET_FIRST_NAME",
                        payload: event.target.value,
                      })
                    }
                    required={true}
                  />
                </div>
                <div className="form-group my-2">
                  <Input
                    label="Last Name"
                    type="text"
                    class_name="input-textbox p-1"
                    placeholder="Enter last name"
                    value={lastName}
                    changeHandler={(event) =>
                      dispatch({
                        type: "SET_LAST_NAME",
                        payload: event.target.value,
                      })
                    }
                    required={true}
                  />
                </div>
                <div className="form-group my-2">
                  <Input
                    label="Password"
                    type={togglePassword ? "text" : "password"}
                    class_name="input-textbox p-1"
                    placeholder="Password"
                    value={password}
                    changeHandler={(event) =>
                      dispatch({
                        type: "SET_PASSWORD",
                        payload: event.target.value,
                      })
                    }
                    required={true}
                  />
                  <span
                    className="show-password"
                    onClick={() => setTogglePassword((prevState) => !prevState)}
                  >
                    {togglePassword ? (
                      <i className="fas fa-eye"></i>
                    ) : (
                      <i className="fas fa-eye-slash"></i>
                    )}
                  </span>
                </div>
                <div className="form-group my-2">
                  <Input
                    label="Confirm Password"
                    type="password"
                    class_name="input-textbox p-1"
                    placeholder="Password"
                    value={confirmPassword}
                    changeHandler={(event) =>
                      dispatch({
                        type: "SET_CONFIRM_PASSWORD",
                        payload: event.target.value,
                      })
                    }
                    required={true}
                  />
                </div>
                {confirmPassword.length > 0 && password !== confirmPassword && (
                  <span className="input-err py-1">password not matching</span>
                )}

                {authError && (
                  <span className="input-err p-1">{authError}</span>
                )}
                <button type="submit" className="btn btn-primary">
                  Create new account
                </button>
              </form>

              <Link to="/login" className="btn-link center-div">
                Already have an account?
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Signup;
