import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft
} from "@fortawesome/free-solid-svg-icons";
import config from "../../config"
import weatherIcons from "../../resources/weatherIcons";
import LineGraph from "./LineGraph";

const ForecastWrapper = styled.div`
  height: 79vh;
  width: 60vw;
  min-width: 254px;
  display: flex;
  flex-direction: column;
  background-color: rgba(255,255,255,0.5);
  border-radius: 10px;
  box-shadow: rgba(25, 17, 34, 0.55) 0px 3px 10px;
  padding: 1rem;
  margin-top: 5vh;
  text-align: left;

  @media (max-width: 992px) {
    width: 86vw;
    margin-top: 2vh;
  }

`;

const Forecast = ({ className, history }) => {
  const params = useParams();
  const [forecastData, setForecastData] = useState({});
  const [extended, setExtended] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isSubscribed = true;

    const getForecast = async () => {
      try {
        await fetch(
          params.loc ? `${config.API.URL}/forecast?loc=${params.loc}` : `${config.API.URL}/forecast?lat=${params.lat}&lon=${params.lon}`,
          {
            mode: "cors"
          }
        )
          .then(response => response.json())
          .then(data => {
            if (isSubscribed) {
              setForecastData(data);
            }
          })
          .then(setLoading(false));
      } catch (e) {
        console.log(e)
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
    const dirs = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
    return dirs[parseInt(deg / 22.5 + 0.5) % 16]
  };

  const manipulateGraphData = graphData => {
    return [{
      id: `Temperature`,
      color: "hsl(185, 70%, 50%)",
      data: graphData.map(metric => {
        let dt = new Date(metric.dt * 1000)
        return { x: `${dt.toLocaleDateString()} ${dt.toLocaleTimeString()}`, y: metric.main.temp }
      })
    }];

  };

  if (forecastData.current && forecastData.current.weather && !loading) {
    return (
      <ForecastWrapper className={className}>
        <span className={`goBack ${className}`} onClick={() => history.push("/")}>
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            className={`icon ${className}`}
          />{" "}
        Back to Home
      </span>
        <h3 className={className}>Your forecast for {forecastData.current.name}.</h3>
        <span className={className}>
          {new Date(forecastData.current.dt * 1000).toLocaleString()}
        </span>
        <span className={className}>
          {forecastData.current.weather
            .map(weather => titleCase(weather.description))
            .join(", ")}
        </span>
        <div className={`weatherContainer ${className}`}>
          <div className={`weatherCurrent ${className}`}>
            <img
              alt="weather icon"
              src={getWeatherIcon(
                forecastData.current.weather[0].id,
                forecastData.current.dt,
                forecastData.current.sys.sunrise,
                forecastData.current.sys.sunset
              )}
              className={`weathericon ${className}`}
            />
            <div className={className}>
              {Math.ceil(forecastData.current.main.temp)}
              <span>°F</span>
            </div>
          </div>
          <div className={`weatherDetails ${className}`}>
            <div>Humitidy: {forecastData.current.main.humidity}%</div>
            <div>Wind: {degreesToDirection(forecastData.current.wind.deg)} {Math.ceil(forecastData.current.wind.speed)}mph</div>
          </div>
        </div>
        <div className={`weatherGraph ${className}`}>
          <h3 className={className}>5-day Temperature Outlook</h3>
          <LineGraph
            leftAxis={"Temperature (°F)"}
            data={manipulateGraphData(forecastData.extended.list)}
          /></div>
      </ForecastWrapper>
    );
  } else if(forecastData.current && !forecastData.current.weather){
    return(
      <ForecastWrapper  className={className} style={{
        height: "50px",
        width: "auto"
      }}>
        <span className={`goBack ${className}`} onClick={() => history.push("/")}>
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            className={`icon ${className}`}
          />{" "}
        Back to Home
      </span>
      <h3 className={className}>{`Requested ${titleCase(forecastData.current.message)}. Return to home and try again.`}</h3>
      </ForecastWrapper>
    );
  }
  else return null;
};

export default styled(Forecast)`
.goBack {
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  color: #991F3D;
}
.goBack:hover {
  text-decoration: underline;
  cursor: pointer;
}
  h3 {
    margin-top:0px;
  }
  .weatherContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
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
  .weatherDetails{
    padding-left: 16px;
  }
  .weatherGraph {
    height:100%;
    max-height: calc(79vh - 19px - 2rem - 85px - 21px - 21px - 1em);
    width: 100%;
    background-color: white;
  }
  .weatherGraph > h3{
    text-align:center;
  }
`;
