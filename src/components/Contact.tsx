import React from "react";
import styled from "styled-components";

import { Spring } from "react-spring";
import { Color } from "../Color";

const email = "hello@aleksandrasays.com";

const Container = styled.div`
  position: absolute;
  color: ${Color.PrimaryColor};
  bottom: 40%;
  font-size: 3.5em;
  font-weight: 700;
  line-height: 1.4;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contact = ({ visible }: { visible: boolean }) => (
  <Spring
    to={
      visible
        ? { scale: 1.1, opacity: 1, display: "flex" }
        : { opacity: 0, scale: 0, display: "none" }
    }
    config={{ duration: 1000 }}
    delay={visible ? 1000 : 0}
  >
    {({ scale, opacity }) => (
      <Container style={{ opacity, transform: `scale(${scale}, ${scale})` }}>
        {email}
      </Container>
    )}
  </Spring>
);

export default Contact;
