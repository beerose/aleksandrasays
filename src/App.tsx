import React, {Component, StatelessComponent } from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import img from "./assets/img/background.png";
import { Hamburger } from './components/Hamburger';
import Greetings from './components/Greetings';

const Content = styled.div`
  background-image: url(${img});
  background-repeat: repeat;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const App: StatelessComponent = () => (
  <Router>
    <Content>
      <>
      <Hamburger />
        <Switch>
          <Route exact path="/medium" />
          <Route exact path="/" component={Greetings as any} />
        </Switch>
      </>
    </Content>
  </Router>
);
