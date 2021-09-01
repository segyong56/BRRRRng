import React from "react";
import { Link } from 'react-router-dom'
const CarinfoCard = ({ carinfo }) => {

  return (
    <card className='list_card3'>
                <div className='card_title'>등록된 차 리스트</div>
                <div className='card_content'>
                  <div className='list_box'>
                    <div className='carlist-table'>
                      <table id='dash-table'>
                        <thead id='dash-thead'>
                          <tr>
                            <th id='dash-th'>CAR</th>
                            <th id='dash-th'>CONNECTION TYPE</th>
                            <th id='dash-th'>CHARGE TYPE</th>
                          </tr>
                        </thead>
                        <tbody>
                          {carinfo.map((data, idx) => {
                            return (
                              <tr>
                                <td className='table-d' id='dash-td'>
                                  {data.carname}
                                </td>
                                <td id='dash-td'>{data.chargetype}</td>
                                <td id='dash-td'>급속/완속</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className='moreBtn-box'>
                  <Link to='/mypage/carlist'>
                    <button id='moreBtn'>More</button>
                  </Link>
                </div>
              </card>
  );
};

export default CarinfoCard;

