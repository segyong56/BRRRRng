import React from "react";
import { Link } from 'react-router-dom'

const AddrCard = ({ address }) => {
  return (
    <card className='list_card3'>
      <div className='card_title'>즐겨찾기 주소록</div>
      <div className='card_content'>
        <div className='list_box'>
          <div className='carlist-table'>
            <table id='dash-table'>
              <thead id='dash-thead'>
                <tr>
                  <th id='dash-addr-th'>Id</th>
                  <th id='dash-addr-th'>ADDRESS</th>
                </tr>
              </thead>
              <tbody>
                {address.length === 0 ? "" : address.map((data, idx) => {
                  return (
                    <tr key={idx}>
                      <td className='table-addr-d' id='dash-d'>
                        {idx + 1}
                      </td>
                      <td className='table-addr-d' id='dash-td'>
                        {data}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='moreBtn-box'>
        <Link to='/mypage/addrlist'>
          <button id='moreBtn'>More</button>
        </Link>
      </div>
    </card>
  );
};

export default AddrCard;
