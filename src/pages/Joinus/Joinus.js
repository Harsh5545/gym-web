import React, { useState, useEffect } from "react";
// import Header from "./Header/Header";
import register from "./Joinus.module.css";
import { NavLink } from "react-router-dom";

function Joinus() {
  let initialValues;
  if (localStorage.getItem("user") === null) {
    initialValues = [];
  } else {
    initialValues = JSON.parse(localStorage.getItem("user"));
  }
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    addingUser(email, username, password);
  };

  const addingUser = (email, username, password) => {
    const newUser = {
      email: email,
      username: username,
      password: password,
    };
    function emailExists(email) {
      for (let i = 0; i < userData.length; i++) {
        if (userData[i].email === email) {
          return true;
        }
      }
      return false;
    }

    if (emailExists(email)) {
      alert("Email is already exist");
    } else {
      setUserData([...userData, newUser]);
      localStorage.setItem("user", JSON.stringify(userData));
      alert("registered successfully");
    }
    setUsername("");
    setEmail("");
    setPassword("");
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userData));
  }, [userData]);

  return (
    <>
      <div className={register.formContainer}>
        <form className={register.form} onSubmit={handleSubmit}>
          <img
            className={register.img}
            src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"
            alt="register-img"
          />
          <div className={register.email}>
            <i class="material-symbols-outlined">email</i>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
            />
          </div>

          <div className={register.username}>
            <i class="material-symbols-outlined">person</i>
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={register.password}>
            <i class="material-symbols-outlined">lock</i>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              minLength={5}
              maxLength={15}
            />
          </div>

          <div className={register.registerLogin}>
            <div className={register.register}>
              <button>Register</button>
            </div>
            <p>
              You have an account?
              <NavLink to="/Login"> Login</NavLink>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Joinus;
