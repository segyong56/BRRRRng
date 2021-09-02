import React from "react";
import { Empty } from "antd";
import "../../mypage.css";

const AddrEmpty = () => {
  return (
    <div className='addrlist-table'>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>ADDRESS</th>
            <th>OPTIONS</th>
          </tr>
        </thead>
      </table>
      <br />
      <Empty />
    </div>
  );
};

export default AddrEmpty;
