import React, {Component, StatelessComponent } from "react";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import img from "./assets/img/background.png";
import { MainPage } from "./components/";

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
      <Switch>
        <Route exact path="/" component={MainPage as any} />
      </Switch>
    </Content>
  </Router>
);
