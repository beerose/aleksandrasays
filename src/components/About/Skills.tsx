import React, { AllHTMLAttributes } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";

import { Transition } from "react-spring";
import { cancel } from "../../assets/svg";
import { Color } from "../../Color";
import { StyledCancel } from "./StyledCancel";

const SkillsContainer = styled.div`
  color: ${Color.DarkPrimaryColor};
  padding: 20px;
  position: absolute;
  max-width: 40%;

  @media (max-device-width: 650px) {
    max-width: 50%;
  }
  @media (max-device-width: 580px) {
    max-width: 60%;
  }
  @media (max-device-width: 480px) {
    max-width: 70%;
  }
`;

const BadgeBox = styled.span`
  border: 1px solid ${Color.DarkPrimaryColor};
  padding: 5px;
  font-size: 0.8em;
  font-weight: 120;
  line-height: 1.4;
  margin: 5px 5px 0 0;

  @media (max-device-width: 650px) {
    font-size: 30px;
  }
  @media (max-device-width: 580px) {
    font-size: 35px;
  }
  @media (max-device-width: 480px) {
    font-size: 40px;
  }
`;

const StyledBadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`;

const SkillsBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  font-size: 1.6em;
  font-weight: 150;
  line-height: 1.4;

  @media (max-device-width: 650px) {
    font-size: 40px;
  }
  @media (max-device-width: 580px) {
    font-size: 45px;
  }
  @media (max-device-width: 480px) {
    font-size: 50px;
  }
`;

const BadgesContainer = ({
  badges,
  name,
}: {
  badges: string[];
  name: string;
}) => (
  <SkillsBoxContainer>
    {name}
    <StyledBadgesContainer>
      {badges.map((badge: string) => (
        <BadgeBox key={badge}>{badge}</BadgeBox>
      ))}
    </StyledBadgesContainer>
  </SkillsBoxContainer>
);

const backendBadges = [
  "elixir",
  "golang",
  "python",
  "docker",
  "kubernetes",
  "ocaml",
];

const frontendBadges = ["react", "typescript", "css", "html", "redux", "rxjs"];

const dbBadges = ["mySQL", "postgreSQL", "ets", "redis"];

const uxBadges = ["Figma", "FramerX", "After Effects", "Adobe Illustrator"];

const otherBadges = ["git", "circle-ci", "jenkins", "jira"];

type SkillsBoxProps = {
  onCloseClick: () => void;
  visible: boolean;
} & AllHTMLAttributes<HTMLDivElement>;
export const SkillsBox = (props: SkillsBoxProps) => {
  const { onCloseClick, visible, onClick } = props;
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    swipe: true,
    touchMove: true,
  };
  return (
    <Transition
      from={{ opacity: 0, scale: 0.9 }}
      enter={{ scale: 1.1, opacity: 1 }}
      leave={{ opacity: 0, scale: 0 }}
      config={{ friction: 5, tension: 15, velocity: 5 }}
    >
      {visible &&
        (({ scale, opacity }) => (
          <SkillsContainer
            style={{
              opacity,
              transform: `scale(${scale}, ${scale})`,
            }}
            onClick={onClick}
          >
            <StyledCancel src={cancel} onClick={onCloseClick} />
            <Slider {...settings}>
              <BadgesContainer
                key={"Backend"}
                name="Backend skills"
                badges={backendBadges}
              />
              <BadgesContainer
                key={"Frontend"}
                name="Frontend skills"
                badges={frontendBadges}
              />
              <BadgesContainer
                key={"Databases"}
                name="Databases"
                badges={dbBadges}
              />
              <BadgesContainer
                key={"UX/UI"}
                name="UX/UI tools"
                badges={uxBadges}
              />
              <BadgesContainer
                key={"Other"}
                name="Other"
                badges={otherBadges}
              />
            </Slider>
          </SkillsContainer>
        ))}
    </Transition>
  );
};
