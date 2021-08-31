import React, { useState, useEffect } from "react";
import Header from "./util/Header";
import "./css/search.css";
import { useHistory } from "react-router-dom";
import cityData from "../../dummydata/cityData";
import axios from "axios";
import SearchInput from "./SearchInput";
import Result from "./Result";

const Search = () => {
  const [city, setCity] = useState("서울특별시");
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");

  const [hasResult, setHasResult] = useState(false);
  const [chargingStations, setChargingStations] = useState([]);

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

    const API_URL = "https://api.brrrrng.ga";

    axios.post(`${API_URL}/charge/search`, data).then((response) => {
      if (response.data) {
        setChargingStations(response.data.response.body.items.item);
        setHasResult(true)
      }
    });
  };

  return (
    <div>
      <Header />
      <section>
        {hasResult ? <Result chargingStations={chargingStations} setHasResult={setHasResult}/> : <SearchInput
          searchHandler={searchHandler}
          setAddress={setAddress}
          setDistrict={setDistrict}
          setCity={setCity}
          districts={districts}
          address={address}
        />}
      </section>
    </div>
  );
};

export default Search;
