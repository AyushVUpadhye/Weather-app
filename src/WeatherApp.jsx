import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {
  const [weatherInfo, setweatherInfo] = useState({
    city: "Delhi",
    fellsLike: 29.71,
    temp: 29.82,
    tempMax: 29.82,
    tempMin: 29.82,
    humidity: 42,
    weather: "scattered clouds"
  });

  let updateInfo = (newinfo) => {
    setweatherInfo(newinfo);
  };

  return(
      <div style={{textAlign: "center"}}>
        <h2>Weather App by Ayush</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
      </div>
  );
}