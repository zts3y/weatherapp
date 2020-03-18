import React from 'react';
import styled from "styled-components"
import {Header} from "./components"
import background from './resources/1.jpeg';
import './App.css';

const AppWrapper = styled.div`
height: 100vh;
width: 100vw;
background-image: url(${background});
background-repeat: no-repeat;
background-size: cover;
`

function App({className}) {
  return (
    <AppWrapper className={`${className} App`}>
      <Header className={className} />
      <div id="main"></div>
    </AppWrapper>
  );
}

export default styled(App)`
`;
