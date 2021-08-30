import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="signupPage">
      <header className="loginHeader" />

      <section className="signupContainer">
        <div className="signupImg-box">
          <img id="create" src="../image/create.png" alt="create image" />
        </div>
        <div className="signupForm-box">
          <ul>
            <li>
              <input
                className="loginInput"
                type="text"
                placeholder="username"
              />
            </li>
            <li>
              <input className="loginInput" type="email" placeholder="email" />
            </li>
            <li>
              <input
                className="loginInput"
                type="password"
                placeholder="password"
              />
            </li>
            <li>
              <input
                className="loginInput"
                type="password"
                placeholder="repeat your password"
              />
            </li>
            <li>
              <div className="loginBtn-group">
                <button className="loginBtn login_btn" type="submit">
                  Sign up
                </button>
              </div>
              <div>
                <Link to="/login">you have an account already?</Link>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <footer>
        <img id="drive" src="../image/footer_img.png" alt="drive" />
      </footer>
    </div>
  );
};

export default Signup;
