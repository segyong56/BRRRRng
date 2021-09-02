import React from "react";
import "../../mypage.css";
import axios from "axios";
import CarEmpty from "./CarEmpty";
const ListTable = ({ carinfo }) => {
  const deleteMycarHandler = (carid) => {
    console.log(typeof carid);
    const id = localStorage.id;

    const data = {
      data: {
        carid: carid,
      },
    };

    axios
      .delete(`https://api.brrrrng.ga/user/${id}/mycar`, data)
      .then((response) => {
        console.log(response);
      });
  };

  console.log(carinfo);

  return (
    <>
      {carinfo.length === 0 ? (
        <CarEmpty />
      ) : (
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
            <tbody>
              {carinfo.map((data, idx) => {
                return (
                  <tr key={idx}>
                    <td className='table-d'>{data.carname}</td>
                    <td>{data.chargetype}</td>
                    <td>급속/완속</td>
                    <td>
                      <i
                        className='fas fa-trash-alt'
                        onClick={() => deleteMycarHandler(data.carid)}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ListTable;
