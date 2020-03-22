import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import config from "../../config"
import weatherIcons from "../../resources/weatherIcons";

const ForecastWrapper = styled.div`
  height: 50vh;
  width: 60vw;
  min-width: 254px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(25, 17, 34, 0.55) 0px 3px 10px;
  padding: 1rem;
  margin-top: 15vh;
  text-align: left;
`;

const Forecast = ({ className }) => {
  const params = useParams();
  const [forecastData, setForecastData] = useState({});

  useEffect(() => {
    let isSubscribed = true;

    const getForecast = async () => {
      try {
        await fetch(
          `${config.API.URL}/forecast?lat=${params.lat}&lon=${params.lon}`,
          {
            mode: "cors"
          }
        )
          .then(response => response.json())
          .then(data => {
            if (isSubscribed) {
              setForecastData(data);
            }
          });
      } catch (e) {
        console.error(e);
      }
    };

    getForecast();

    return () => (isSubscribed = false);
  }, [params.q]);

  const getWeatherIcon = (id, time, sunrise, sunset) => {
    if (time > sunrise && time < sunset) {
      //dayime
      return weatherIcons[id].icon;
    } else if (time > sunrise && time > sunset) {
      //nighttime
      return weatherIcons[id].altIcon;
    } else {
      //early morning
      return weatherIcons[id].altIcon;
    }
  };

  const titleCase = inputString => {
    return inputString
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.substr(1))
      .join(" ");
  };

  const degreesToDirection = deg => {
    const dirs = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"]
    return dirs[parseInt(deg/22.5+0.5) % 16]
  };
  if (Object.keys(forecastData).length > 0 && forecastData.weather) {
    return (
      <ForecastWrapper className={className}>
        <h3 className={className}>Your forecast for {forecastData.name}.</h3>
        <span className={className}>
          {new Date(forecastData.dt * 1000).toLocaleString()}
        </span>
        <span className={className}>
          {forecastData.weather
            .map(weather => titleCase(weather.description))
            .join(", ")}
        </span>
        <div className={`weatherContainer ${className}`}>
          <div className={`weatherCurrent ${className}`}>
            <img
              alt="weather icon"
              src={getWeatherIcon(
                forecastData.weather[0].id,
                forecastData.dt,
                forecastData.sys.sunrise,
                forecastData.sys.sunset
              )}
              className={`weathericon ${className}`}
            />
            <div className={className}>
              {Math.ceil(forecastData.main.temp)}
              <span>°F</span>
            </div>
          </div>
          <div className={`weatherDetails ${className}`}>
            <div>Humitidy: {forecastData.main.humidity}%</div>
            <div>Wind: {degreesToDirection(forecastData.wind.deg)} {Math.ceil(forecastData.wind.speed)}mph</div>
          </div>
        </div>
      </ForecastWrapper>
    );
  } else {
    return null;
  }
};

export default styled(Forecast)`
  .weatherContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .weatherCurrent {
    display: flex;
    align-items: center;
  }
  .weathericon {
    height: 64px;
    width: 64px;
  }
  .weatherCurrent > div {
    font-size: 64px;
  }
  .weatherCurrent > div > span {
    font-size: 16px;
  }
  .weatherDetails {
  }
`;
