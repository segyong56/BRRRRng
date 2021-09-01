import React, { useState, useEffect } from "react";
import Header from "./util/Header";
import Footer from "./util/Footer"
import "./css/search.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import cityData from "../../dummydata/cityData";
import SearchInput from "./SearchInput";
import { getStations } from "../../_actions/apiAction";

const Search = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  
  const [city, setCity] = useState("서울특별시");
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");

  
  useEffect(() => {
    cityData.map((data) => {
      if (data.city === city) {
        setDistricts(data.district);
      }
    });
  }, [city]);

  const searchHandler = (e) => {
    e.preventDefault();
    console.log(city, district, address);
    const A = address ? address : "";
    const data = {
      address: city + " " + district + A,
    };

    dispatch(getStations(data)).then(response => {
      if(response.payload){
        history.push('/search/result')
      }
    })
  };

  return (
    <div>
      <Header />
      <section>
       <SearchInput
          searchHandler={searchHandler}
          setAddress={setAddress}
          setDistrict={setDistrict}
          setCity={setCity}
          districts={districts}
          address={address}
        />
      </section>
      <Footer />
    </div>
  );
};

export default Search;
