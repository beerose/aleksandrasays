import React from "react";
import styled from "styled-components";
import { style as tss } from "typestyle";

import { github, instagram, linkedin, twitter } from "../../assets/svg";
import { SocialIcon } from "./SocialIcon";

const SocialIconsContainer = styled.div`
  width: fit-content;
  position: relative;
`;

const styles = {
  linekid: tss({
    bottom: "2px",
  }),
  twitter: tss({
    width: "115%",
  }),
};

class SocialIconsPanel extends React.Component {
  public render() {
    return (
      <SocialIconsContainer>
        <SocialIcon
          linkTo={"https://www.github.com/blackdahila"}
          imgSrc={github}
        />
        <SocialIcon
          style={styles.twitter}
          linkTo={"https://www.twitter.com/aleksandrasays"}
          imgSrc={twitter}
        />
        <SocialIcon
          style={styles.linekid}
          linkTo={"https://www.linkedin.com/in/aleksandra-sikora-b54699132/"}
          imgSrc={linkedin}
        />
        <SocialIcon
          linkTo={"https://www.instagram.com/poczekajnamnie"}
          imgSrc={instagram}
        />
      </SocialIconsContainer>
    );
  }
}

export default SocialIconsPanel;
