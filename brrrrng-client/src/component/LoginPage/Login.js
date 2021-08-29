import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
const login = () => {
  return (
    <div className="loginPage">
      <header className="loginHeader" />

      <section className="loginContainer">
        <div className="loginImg-box">
          <img id="login" src="../image/login.png" alt="login image" />
        </div>
        <div className="loginForm-box">
          <ul className="loginForm">
            <li>
              <input className="loginInput" type="email" placeholder="email" />
            </li>
            <li>
              <input className="loginInput" type="password" placeholder="pw" />
            </li>
            <li>
              <div className="loginBtn-group">
                <button className="loginBtn login_btn" type="submit">
                  Login
                </button>
                <Link className="loginBtn login_btn" to="/signup" type>
                  Sign up
                </Link>
                <Link
                  className="loginBtn login_btn"
                  id="without"
                  to="/search"
                >
                  Start without Login
                </Link>
              </div>
            </li>
          </ul>
        </div>
        {/* <div className="carImg-box">
        <img id="drive" src="../image/footer_img.png" alt="drive" />
        </div> */}
      </section>
      <footer id="footer">
        <img id="drive" src="../image/footer_img.png" alt="drive" />
      </footer>
    </div>
  );
};

export default login;
