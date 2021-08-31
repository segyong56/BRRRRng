import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
//import { signupRequest } from "../../_actions/authAction";
=======

>>>>>>> 21c6f96154ba74d202497b5802a0bd0955ee5bf0
import axios from "axios";

const Signup = () => {
  
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const signupHandler = (e) => {
    e.preventDefault();

    const data = {
      username: name,
      email: email,
      password: password,
    };

    if (password !== passwordConfirm) {
      return alert("비밀번호가 틀립니다.");
    } else {
      axios
        .post("https://api.brrrrng.ga/auth/signup", data)
        .then((response) => {
          if (response.data) {
            history.push("/login");
          }
        });
    }
  };
  return (
    <div className='signupPage'>
      <header className='loginHeader' />

      <section className='signupContainer'>
        <div className='signupImg-box'>
          <img id='create' src='../image/create.png' alt='create image' />
        </div>
        <div className='signupForm-box'>
          <ul>
            <li>
              <input
                className='loginInput'
                type='text'
                placeholder='username'
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
            </li>
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
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </li>
            <li>
              <input
                className='loginInput'
                type='password'
                placeholder='repeat your password'
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.currentTarget.value)}
              />
            </li>
            <li>
              <div className='loginBtn-group'>
                <button
                  className='loginBtn login_btn'
                  type='submit'
                  onClick={signupHandler}
                >
                  Sign up
                </button>
              </div>
              <div>
                <Link to='/login'>you have an account already?</Link>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <footer>
        <img id='drive' src='../image/footer_img.png' alt='drive' />
      </footer>
    </div>
  );
};

export default Signup;
