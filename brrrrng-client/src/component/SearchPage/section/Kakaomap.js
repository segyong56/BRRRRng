import React, { useState, useEffect } from "react";
import "../css/search.css";
const { kakao } = window;

const Kakaomap = ({ chargingStations }) => {
  const [markerArr, setMarkerArr] = useState([]);
  const lat = chargingStations[0].lat;
  const longi = chargingStations[0].longi;

  const convertInfo = (cpStat) => {
    switch (cpStat) {
      case "1":
        return {
          class: "far fa-laugh-wink",
          status: "충전가능",
          color: "green",
        };
      case "2":
        return {
          class: "far fa-grin-beam-sweat",
          status: "충전중",
          color: "orange",
        };
      case "3":
        return {
          class: "far fa-grimace",
          status: "고장/점검",
          color: "red",
        };
      case "4":
        return {
          class: "far fa-frown",
          status: "통신장애",
          color: "red",
        };
      case "5":
        return {
          class: "fas fa-exclamation-triangle",
          status: "통신미연결",
          color: "red",
        };
      default:
        return "";
    }
  };

  useEffect(() => {
    var mapContainer = document.getElementById("Mymap"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 5, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    function setCenter() {
      // 이동할 위도 경도 위치를 생성합니다
      var moveLatLon = new kakao.maps.LatLng(lat, longi);

      // 지도 중심을 이동 시킵니다
      map.setCenter(moveLatLon);
    }

    const createMarker = () => {
      var imageSrc = "../../image/pin.png", // 마커이미지의 주소입니다
        imageSize = new kakao.maps.Size(35, 35), // 마커이미지의 크기입니다
        imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption,
      );

      chargingStations.forEach((e) => {
        const markers = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(e.lat, e.longi),
          image: markerImage,
        });

        const curStatus = convertInfo(e.cpStat);
        const infowindow = new kakao.maps.InfoWindow({
          content: `<div id="infowindow">${curStatus.status}</div>`,
        });

        // var content = `<div id="infowindow">${curStatus.status}</div>`;

        // // 커스텀 오버레이를 생성합니다
        // var customOverlay = new kakao.maps.CustomOverlay({
        //   map: map,
        //   position: position,
        //   content: content,
        //   yAnchor: 1,
        // });

        infowindow.open(map, markers);
      });
    };

    createMarker();

    setCenter();
  }, []);

  return (
    <div>
      <div
        id='Mymap'
        style={{
          width: "100vw",
          height: "90vh",
          zIndex: "1",
          borderRadius: "10px",
          border: "2px solid lightgrey",
        }}
      ></div>
    </div>
  );
};

export default Kakaomap;
