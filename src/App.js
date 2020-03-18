import React from 'react';
import styled from "styled-components"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Header, Search } from "./components"
import background from './resources/1.jpeg';
import './App.css';

const AppWrapper = styled.div`
height: 100vh;
width: 100vw;
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
          <Switch>
            <Route path="/" exact component={Search} />
            <Route path="/forecast" component={() => <div></div>} />
            <Route
              component={() => {
                return <Redirect to="/" />;
              }}
            />
          </Switch>
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
