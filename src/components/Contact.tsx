import React from "react";
import styled from "styled-components";

import { darken } from "polished";
import { Transition } from "react-spring";
import { Color } from "../Color";
import { Header } from "./Header/Header";
import { SocialIconsPanel } from "./SocialIcons";

const email = "hello@aleksandrasays.com";

const Container = styled.div`
  position: absolute;
  color: ${darken(0.1, Color.BottomColor)};
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
  <>
    <Transition
      from={{ opacity: 0, scale: 0.9 }}
      enter={{ scale: 1.1, opacity: 1 }}
      leave={{ opacity: 0, scale: 0 }}
      config={{ duration: 1000 }}
      delay={visible ? 1000 : 0}
    >
      {visible &&
        (({ scale, opacity }) => (
          <Container
            style={{ opacity, transform: `scale(${scale}, ${scale})` }}
          >
            {email}
            <div>
              <SocialIconsPanel
                color={darken(0.1, Color.BottomColor)}
                visible={visible}
                delay={1000}
              />
            </div>
          </Container>
        ))}
    </Transition>
  </>
);

export default Contact;
