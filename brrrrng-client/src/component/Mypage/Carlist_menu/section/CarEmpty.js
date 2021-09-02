import React from "react";
import { Empty } from "antd";
import "../../mypage.css";

const CarEmpty = () => {
  return (
    <div>
      <div className='carlist-table'>
        <table>
          <thead>
            <tr>
              <th>차명</th>
              <th>커넥트 타입</th>
              <th>급속 / 완속</th>
              <th>OPTIONS</th>
            </tr>
          </thead>
        </table>
        <br />
        <Empty />
      </div>
    </div>
  );
};

export default CarEmpty;
