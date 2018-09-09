import React from "react";
import styled from "styled-components";

import { Header } from './Header';

const copy: string[] = [
  `My name is Aleksandra Sikora and I am a full-stack developer from Wrocław. I'm a functional programming enthusiast, constantly experimenting with new technologies. I'm very passionate about web development and web design, striving to improve my skills every day.`,
  `Before starting working as a developer I’ve been a robotics and informatics teacher for children, which gave me a nice opportunity to learn how to express big ideas in a less complicated way along with how to stay extremely calm and patient whatever happens.`,
  `In my computer-free time I am a sports lover, especially interested in climbing and tennis. But when I’m too sore for a training you can find me wander around some art museum. I’m definitely into art, both classical as well as contemporary. `,
];

const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 600px;
`;

const MainCopyBox = styled.div`
  font-size: 1.6em;
  font-weight: 600;
  line-height: 1.4;
  color: #0008ce;
  background: white;
  padding: 5% 5% 5% 5%;
  height: fit-content;
`;

const SecondaryCopyBox = styled.div`
  font-size: 1em;
  line-height: 1.4;
  color: #0008ce;
  background: white;
  padding: 0% 5% 5% 5%;
  height: fit-content;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

const StyledText = styled.span`
  background: #0008ce;
  font-weight: 400;
  color: white;
  padding: 1px 4px 1px 4px;
  border-radius: 2px;
  font-weight: 50;
`

export default class About extends React.Component {
  render() {
    return (
      <Container>
        <Header showArrow={true}/>
        <CopyContainer>
          <MainCopyBox>
          My name is <StyledText>Aleksandra Sikora</StyledText> and I am a full-stack developer from Wrocław. 
          I'm a functional programming enthusiast, 
          constantly experimenting with new technologies. 
          I'm very passionate about web development and web design, 
          striving to improve my skills every day.
          </MainCopyBox>
          <SecondaryCopyBox>
          Before starting working as a developer 
          I’ve been a robotics and informatics teacher for children, 
          which gave me a nice opportunity to learn how to express big ideas in a 
          less complicated way along with how to stay extremely 
          calm and patient whatever happens.
          <br /><br />
          In my computer-free time I am a sports lover, 
          especially interested in climbing and tennis. 
          But when I’m too sore for a training you can find me wander around some art museum. 
          I’m definitely into art, both classical as well as contemporary.
          </SecondaryCopyBox>
        </CopyContainer>
      </Container>
    );
  }
}
