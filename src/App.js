import React from 'react';
import styled from "styled-components"
import {
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import { Header, Search, Forecast, AnimatedRoutes, RouteTransition } from "./components"
import background from './resources/1.jpeg';
import './App.css';

const AppWrapper = styled.div`
height: 100vh;
width: 100vw;
min-width: 340px;
background-image: url(${background});
background-repeat: no-repeat;
background-size: cover;
`

function App({ className }) {
  return (
    <Router>
      <AppWrapper className={`${className} App`}>
        <Header className={className} />
        <div id="main" className={className}>
          <AnimatedRoutes exitBeforeEnter initial={false}>
            <RouteTransition path="/" exact><Search /></RouteTransition>
            <RouteTransition path="/forecast/:lat/:lon"><Forecast /></RouteTransition>
            <RouteTransition path="/forecast/:loc"><Forecast /></RouteTransition>
            <RouteTransition
              component={() => {
                return <Redirect to="/" />;
              }}
            />
          </AnimatedRoutes>
        </div>
      </AppWrapper>
    </Router>
  );
}

export default styled(App)`
#main{
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
}
`;
