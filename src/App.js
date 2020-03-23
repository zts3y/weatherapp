import React from 'react';
import styled from "styled-components"
import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Header, Search, Forecast } from "./components"
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
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch>
              <Route path="/" exact component={Search} />
              <Route path="/forecast/:lat/:lon" component={Forecast} />
              <Route
                component={() => {
                  return <Redirect to="/" />;
                }}
              />
            </Switch>
          </AnimatePresence>
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
