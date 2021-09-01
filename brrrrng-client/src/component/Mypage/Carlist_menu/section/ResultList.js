import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import "../../mypage.css";
import Empty from "./Empty";
import axios from 'axios';

const ResultList = ({ carinfo }) => {
  const [currentIdx, setCurrentIdx] = useState(null);
  const [checked, setChecked] = useState(false);
  const [checkedCar, setCheckedCar] = useState("")

  const history = useHistory();
 
  const addToMycarlist = (data, idx) => {
    console.log(data)
    setCheckedCar(data)
    setCurrentIdx(idx);
    setChecked(!checked)
  };
  console.log(checkedCar.carid)
  const addTomyCarHandler = (e) => {
    
    e.preventDefault();


    const data = {
      carid :checkedCar.carid
    }

    const id = localStorage.id
    axios.put(`https://api.brrrrng.ga/user/${id}/mycar`, data).then(response => {
      if(response.data.success) {
        history.push('/mypage/carlist')
      }
    })
  }

  return (
    <div className="result-box">
      {carinfo.length === 0 ? (
        <Empty />
      ) : (
        <div className="result-area">
          <div className="result-table">
            <table>
              <thead>
                <tr>
                 
                  <th>차명</th>
                  <th>커넥트 타입</th>
                  <th>브랜드명</th>
                </tr>
              </thead>
              <tbody>
                {carinfo.map((data, idx) => {
                  return (
                    <tr 
                    key={idx} 
                    className={currentIdx === idx ? "check" : ""}
                    onClick={() => addToMycarlist(data, idx)}>
                      <td className="table-d">{data.carname}</td>
                      <td>{data.chargetype}</td>
                      <td>{data.maker}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="addBtn-box">
            <div>
              <button
              onClick={addTomyCarHandler}
              >추가하기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultList;
