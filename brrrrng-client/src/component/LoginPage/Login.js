import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./login.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const loginHandler = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    axios
      .post("https://api.brrrrng.ga/auth/login", data, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("id", response.data.userInfo._id);
        history.push("/search");
      });
  };

  return (
    <div className='loginPage'>
      <header className='loginHeader' />

      <section className='loginContainer'>
        <div className='loginImg-box'>
          <img id='login' src='../image/login.png' alt='login image' />
        </div>
        <div className='loginForm-box'>
          <ul className='loginForm'>
            <li>
              <input
                className='loginInput'
                type='email'
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </li>
            <li>
              <input
                className='loginInput'
                type='password'
                placeholder='pw'
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </li>
            <li>
              <div className='loginBtn-group'>
                <button
                  className='loginBtn login_btn'
                  type='submit'
                  onClick={loginHandler}
                >
                  Login
                </button>
                <Link className='loginBtn login_btn' to='/signup' type>
                  Sign up
                </Link>
                <Link className='loginBtn login_btn' id='without' to='/search'>
                  Start without Login
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <footer id='footer'>
        <img id='drive' src='../image/footer_img.png' alt='drive' />
      </footer>
    </div>
  );
};

export default Login;
