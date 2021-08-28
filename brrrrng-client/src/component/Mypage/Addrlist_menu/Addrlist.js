import React from 'react'
import '../mypage.css'
import Header from '../util/Header'
import SideMenu from '../util/SideMenu'


const Addrlist = () => {
  return (
    <div>
    <Header />
    <section>

      <div className="mypage_section_box">

          <div className="sideMenu_box">
             <SideMenu />
          </div>
          <div className="contents_box">
          
              
          </div>
       </div>
  </section>

  </div>
  )
}

export default Addrlist
