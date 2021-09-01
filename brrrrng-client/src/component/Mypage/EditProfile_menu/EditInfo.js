import React, { useState, useEffect } from "react";
import "../mypage.css";
import { Link } from "react-router-dom";
import Header from "../util/Header";
import SideMenu from "../util/SideMenu";
import axios from 'axios'
import user from "../../../_reducers/userReducer";

const EditInfo = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")

  useEffect(() => {
   
    axios.get("https://api.brrrrng.ga/user/info", {withCredentials: true}).then(response => {
      console.log(response.data)
    })
  }, [])

  const editUserInfoHandler = (e) => {
    e.preventDefault();

    const data = {
      name : name ? name : user.name,
      email : email ? email : user.email,
      password: password ? password : user.password
    }

    axios.put("https://api.brrrrng.ga/user/edit", data, {withCredentials: true}).then(response => {
      console.log(response.data)
    })
  }


  return (
    <div>
      <Header />
      <section>
        <div className="mypage_section_box">
          <div className="sideMenu_box">
            <SideMenu />
          </div>
          <div className="contents_box">
            <div className="edituserinfo_box">
              <div className="edituserinfo-title">guest's 정보</div>
              <div className="edituserinfo_icon-area">
                <i className="fas fa-user-circle"></i>
              </div>
              <div className="editform_box">
                <div className="input_box">
                  <div className="label">
                    <i class="fas fa-user"></i> Name
                  </div>
                  <div className="input">
                    <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    />
                  </div>
                </div>
                <div className="input_box">
                  <div className="label">
                    <i class="far fa-paper-plane"></i> Email
                  </div>
                  <div className="input">
                    <input 
                    type="text" 
                    value={email}
                    onChange={(e)=> setEmail(e.currentTarget.value)}
                    />
                  </div>
                </div>
                <div className="input_box">
                  <div className="label">
                    <i class="fas fa-lock"></i> Password
                  </div>
                  <div className="input">
                    <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    />
                  </div>
                </div>
                <div className="input_box">
                  <div className="label">Password confirm</div>
                  <div className="input">
                    <input 
                    type="password" 
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.currentTarget.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="saveBtn_box">
                <div className="saveBtn">
                  <Link to="/mypage/user">
                    <button>수정 취소</button>
                  </Link>
                </div>
                <div className="saveBtn">
                  <button
                  onClick={editUserInfoHandler}
                  >수정 완료</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditInfo;
