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
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>차명</th>
                  <th>커넥트 타입</th>
                  <th>급속 / 완속</th>
                </tr>
              </thead>
              <tbody>
                {carinfo.map((data, idx) => {
                  return (
                    <tr key={idx} onClick={() => addToMycarlist(data, idx)}>
                      <td>
                        {currentIdx === idx && checked ? (
                          <input type="checkbox" id={currentIdx} checked />
                        ) : (
                          <input type="checkbox" />
                        )}
                      </td>
                      <td className="table-d">{data.carname}</td>
                      <td>{data.connect_type}</td>
                      <td>{data.manufacturer}</td>
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
