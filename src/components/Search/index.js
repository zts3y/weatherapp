import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { usePosition } from "use-position";
import config from "../../config";

const SearchWrapper = styled.div`
  height: 12vh;
  width: 40vw;
  max-width: 470px;
  min-width: 254px;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: rgba(25, 17, 34, 0.55) 0px 3px 10px;
  padding: 1rem;
  margin-top: 15vh;
  text-align: left;
`;

export const Search = ({ history, className }) => {
  const [location, setLocation] = useState({});
  const { latitude, longitude, timestamp } = usePosition();
  const [changedLoc, setChangedLoc] = useState(false);
  useEffect(() => {
    let isSubscribed = true;

    const getCity = async () => {
      try {
        await fetch(
          `${config.API.URL}/locate?lat=${latitude}&long=${longitude}`,
          {
            mode: "cors"
          }
        )
          .then(response => response.json())
          .then(data => {
            if (isSubscribed) {
              setLocation(data);
            }
          });
      } catch (e) {
        console.error(e);
      }
    };
    if (timestamp) getCity();

    return () => (isSubscribed = false);
  }, [latitude, longitude]); // eslint-disable-line

  const validateSearchForm = e => {
    //change out form validation logic
    e.stopPropagation();
    if (changedLoc || timestamp === null) {
      history.push(`/forecast/${location.loc}`);

    } else {
      history.push(`/forecast/${location.lat}/${location.long}`);
    }

  };
  return (
    <SearchWrapper className={className}>
      <h2 className={className}>Enter your location:</h2>
      <div className={`${className} form`}>
        <input
          name="location"
          type="text"
          placeholder="Enter your City, State or Zip code"
          value={location.loc}
          className={className}
          onChange={e => {
            setLocation({ loc: e.target.value });
            setChangedLoc(true);
          }}
          onKeyPress={e => {
            if (e.key === "Enter" && location.loc)
              validateSearchForm(e);
          }}
        ></input>
        <button type="submit" disabled={!location.loc} onClick={validateSearchForm} className={`${className} btn-primary`}>
          Search
        </button>
      </div>
    </SearchWrapper>
  );
};

export default styled(withRouter(Search))`
  h2 {
    margin-top: 0px;
  }
  p{
    margin: 0px;
  }
  .form {
    display: flex;
  }
  input {
    height: 33px;
    width: 100%;
  }

  button {
    align-self: center;
    font-weight: 600;
    display: inline-block;
    font-weight: 400;
    color: white;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
  }
  .btn-primary {
    background-color: rgb(153, 31, 61);
    border-style: solid;
    border-color: rgb(102, 10, 33);
    border-radius: 2px;
    cursor: pointer;
  }
`;
