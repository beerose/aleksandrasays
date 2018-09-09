import React, { StatelessComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import img from "./assets/img/background.png";
import { MainPage, Contact, About } from './components/';

const Content = styled.div`
  background-image: url(${img});
  background-repeat: repeat;
  width: 100%;
  height: 100%;
`;

export const App: StatelessComponent = () => (
  <Router>
    <Content>
      <Switch>
        <Route exact path="/" component={MainPage as any} />
        <Route exact path="/contact" component={Contact as any} />
        <Route exact path="/about" component={About as any} />
      </Switch>
    </Content>
  </Router>
);
