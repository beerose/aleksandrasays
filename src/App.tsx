import React, { StatelessComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import img from "./assets/img/background.png";
import { MainPage, Contact, About } from './components/';

// background-image: url(${img});
const Content = styled.div`
  background-repeat: repeat;
  background-color: #F5DD90;
  width: 100%;
  height: 100%;
`;
//#4b68c1
//#3653ab

export const App: StatelessComponent = () => (
  <Router>
    <Content>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/contact" component={Contact as any} />
        <Route path="/about" component={About as any} />
      </Switch>
    </Content>
  </Router>
);
