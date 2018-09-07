import React, {Component, StatelessComponent} from "react";
import styled from "styled-components";

import img from "../assets/img/background.png";
import { Greetings } from ".";
import { Hamburger } from "./Hamburger";

const Content = styled.div`
  background-image: url(${img});
  background-repeat: repeat;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const MainPage: StatelessComponent = () => (
  <Content>
    <Hamburger />
    <Greetings />
  </Content>
);
