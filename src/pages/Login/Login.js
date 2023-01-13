import React, { useState } from "react";
/* import Header from "./Header/Header"; */
import { NavLink, useNavigate } from "react-router-dom";

import login from "./Login.module.css";
import { useRecoilState } from "recoil";
import { LoginDetailsAtom } from "../../Atom/atom";
import { useEffect } from "react";
function Login() {
  const name = useNavigate();
  const [input, setInput] = useState({ username: "", password: "" });
  const [userDetails, setuserDetails] = useRecoilState(LoginDetailsAtom);
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("user"));

    const found = userData.find(
      (user) =>
        user.username === input.username && user.password === input.password
    );
    if (found) {
      // alert(Welcome`${found.username}`);

      alert("login successfull");
      setuserDetails({ ...userDetails, isLogin: true });
      console.log(userDetails);
      name("/about");
    } else {
      alert("invalid password");
    }
    setInput("");
  };
  useEffect(() => {
    setuserDetails(userDetails);
  }, [userDetails]);
  return (
    <>
      {/* <Header /> */}
      <div className={login.formContainer}>
        <form className={login.form} onSubmit={handleSubmit}>
          <img
            className={login.img}
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
            alt="user-img"
          />

          <div className={login.username}>
            <i class="material-symbols-outlined">person</i>

            <input
              name="username"
              value={input.username}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              type="text"
              required
              placeholder="Username"
            />
          </div>

          <div className={login.password}>
            <i class="material-symbols-outlined">lock</i>
            <i className="material-icons">lock</i>
            <input
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className={login.registerLogin}>
            <p>
              Didn't have an account?<NavLink to="/joinus">Register</NavLink>
            </p>
            <button>Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
