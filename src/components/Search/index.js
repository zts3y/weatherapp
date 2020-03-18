import React, {useState, useEffect, useMemo} from 'react';
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import {motion} from "framer-motion";
import { usePosition } from 'use-position';

const SearchWrapper = styled.div`
height: 12vh;
width: 40vw;
max-width: 470px;
min-width: 254px;
display:flex;
flex-direction: column;
background-color: white;
border-radius: 10px;
box-shadow: rgba(25, 17, 34, 0.55) 0px 3px 10px;
padding: 1rem;
margin-top: 15vh;
text-align: left;
`

const Search = withRouter(({history, className}) => {
    const [location, setLocation] = useState("");
    const { latitude, longitude, timestamp, accuracy, error } = usePosition();
    const [formError, setFormError] = useState("");
    useEffect(() => {
        let isSubscribed = true;
    
        const getCity = async () => {
          try {
            await fetch(
              `https://geocode.xyz/${latitude},${longitude}?geoit=json`,
              {
                mode: "cors"
              }
            )
              .then(response => response.json())
              .then(data => {
                if (isSubscribed){
                    setLocation(data.city ? `${data.city}, ${data.state}` : `${latitude}, ${longitude}`);
                } 
              })
          } catch (e) {
            console.error(e);
          }
        };
        if(timestamp)
            getCity();

        return () => (isSubscribed = false);
      }, [latitude, longitude, timestamp]);

      const validateSearchForm = (e) => {
        if(!e.target[0].value){
            setFormError("Location is required");
        } else {
            history.push(`/forecast?q=${location}`);
        }
      }
    return (
        <SearchWrapper className={className}>
            <h2 className={className}>Enter your location:</h2>
            <form name="locationSearch" onSubmit={validateSearchForm} className={className} > 
                <input name="location" type="text" placeholder="Enter your City, State" value={location} className={className} onChange={(e)=> setLocation(e.target.value)}></input>
                <button type="submit" className={`${className} btn-primary`}>Search</button>
            </form>
        </SearchWrapper>
    )
});

export default styled(Search)`
h2{
    margin-top:0px;
}
input{
    height: 20px;
    width: 100%
}

button{
    margin-top: 5px;
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
	padding: .375rem .75rem;
	font-size: 1rem;
	line-height: 1.5;
	border-radius: .25rem;
}
.btn-primary{
    background-color: rgb(153, 31, 61);
    border-style: solid;
    border-color: rgb(102, 10, 33);
    border-radius: 2px;
}
`
