import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Input } from "../../components";
import { useDispatch, useSelector } from "react-redux";

import "./Auth.css";
import { loginUser } from "./authSlice";
import { useTitle } from "../../hooks";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { authError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useTitle("Login");

  const loginHandler = async (event) => {
    event.preventDefault();
    const res = await dispatch(loginUser({ username, password }));
    if (res?.payload.foundUser) {
      navigate(location.state?.from?.pathname || "/", { replace: true });
    }
  };

  const setDummyUserHandler = () => {
    setUsername("SanketDhabarde1");
    setPassword("sanket123");
  };

  return (
    <div className="px-2">
      <main className="center-div">
        <div className="card card-shadow m-1">
          <div className="card-section">
            <div className="card-header p-2">
              <h3 className="center-div">Login</h3>
              <form onSubmit={loginHandler}>
                <div className="form-group my-2">
                  <Input
                    label="Username"
                    type="text"
                    class_name="input-textbox p-1"
                    placeholder="Enter username"
                    value={username}
                    changeHandler={(event) => setUsername(event.target.value)}
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
                    changeHandler={(event) => setPassword(event.target.value)}
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
                {authError && (
                  <span className="input-err p-1">{authError}</span>
                )}
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <button
                  type="submit"
                  className="btn btn-dummy-user btn-secondary"
                  onClick={setDummyUserHandler}
                >
                  Login with dummy user
                </button>
              </form>
              <Link to="/signup" className="btn-link center-div">
                Create new account <i className="fas fa-arrow-right px-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
