import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../mypage.css";
import Header from "../util/Header";
import SideMenu from "../util/SideMenu";

import axios from "axios";
const UserInfo = () => {

  const history = useHistory()
  useEffect(() => {
    const id = localStorage.id;
    axios
      .get(`https://api.brrrrng.ga/user/${id}/info`, { withCredentials: true })
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  const deleteUserHandler = (e) => {
    e.preventDefault();
    const id = localStorage.id;

    axios
      .delete(`https://api.brrrrng.ga/user/${id}/delete`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        if(response.data.success) {
          history.push('/login')
          localStorage.removeItem("id")
        }
      });
     
  };

  return (
    <div>
      <Header />
      <section>
        <div className="mypage_section_box">
          <div className="sideMenu_box">
            <SideMenu />
          </div>
          <div className="contents_box">
            <div className="userinfo_box">
              <div className="userinfo-title">guest's 정보</div>
              <div className="userinfo_icon-area">
                <i className="fas fa-user-circle"></i>
              </div>
              <div className="userinfo_info-area">
                <div className="userinfo_info">
                  <div className="infoTable">
                    <div className="info-box">
                      <i class="fas fa-user"></i> Name : kimcoding
                    </div>
                    <div className="info-box">
                      <i class="far fa-paper-plane"></i> Email :
                      kimcoding123@google.com
                    </div>
                    <div className="info-box">
                      <i class="fas fa-lock"></i> Password : *******
                    </div>
                  </div>
                </div>
              </div>
              <div className="userinfo-btn_area">
                <div className="deleteBtn">
                  <button onClick={deleteUserHandler}>계정삭제하기</button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserInfo;
