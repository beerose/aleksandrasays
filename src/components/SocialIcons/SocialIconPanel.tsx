import React from 'react';
import styled from 'styled-components';
import { style as tss } from 'typestyle';

import { SocialIcon } from './SocialIcon';
import { twitter, instagram, github, linkedin } from '../../assets/svg';

const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
`

const styles = {
  twitter: tss({
    width: '115%',
  }),
  linekid: tss({
    bottom: '2px',
  }),
}



class SocialIconsPanel extends React.Component {
  render() {
    return (
      <SocialIconsContainer>
        <SocialIcon linkTo={'https://www.github.com/blackdahila'} imgSrc={github}/>
        <SocialIcon style={styles.twitter} linkTo={'https://www.twitter.com/aleksandrasays'} imgSrc={twitter}/>
        <SocialIcon style={styles.linekid} linkTo={'https://www.linkedin.com/in/aleksandra-sikora-b54699132/'} imgSrc={linkedin}/>
        <SocialIcon linkTo={'https://www.instagram.com/poczekajnamnie'} imgSrc={instagram}/>
      </SocialIconsContainer>
    );
  }
}

export default SocialIconsPanel;
