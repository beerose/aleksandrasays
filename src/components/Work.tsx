import React, { AllHTMLAttributes, HTMLAttributes } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";

import { darken, lighten } from "polished";
import { Spring, Transition } from "react-spring";
import { cancel } from "../assets/svg";
import { Color } from "../Color";

const WorkContainer = styled.div`
  color: ${darken(0.3, Color.Pink)};
  padding: 20px;
  position: absulote;
  font-size: 1.5em;
  font-weight: 150;
  line-height: 1.4;
  border-radius: 1px;
  max-width: 40%;
`;

const StyledImg = styled("img")`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  transform: translate3d(10px, -10px, 0);
  cursor: pointer;
`;

const BadgeBox = styled.span`
  color: ${darken(0.3, Color.Pink)};
  border: 1px solid ${darken(0.3, Color.Pink)};
  padding: 5px;
  font-size: 0.8em;
  font-weight: 120;
  line-height: 1.4;
  margin: 5px;
`;

const StyledBadgesContainer = styled.div`
  display: flex;
  max-width: 90%;
  flex-wrap: wrap;
`;

const WorkBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const WorkBoxTitle = styled.span`
  font-weight: 150;
  font-size: 1.5em;
  margin-bottom: 15px;
`;

const BadgesContainer = ({
  badges,
  name,
}: {
  badges: string[];
  name: string;
}) => (
  <WorkBoxContainer>
    <WorkBoxTitle>{name}</WorkBoxTitle>
    <StyledBadgesContainer>
      {badges.map((badge: string) => (
        <BadgeBox>{badge}</BadgeBox>
      ))}
    </StyledBadgesContainer>
  </WorkBoxContainer>
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

type WorkBoxProps = {
  onCloseClick: () => void;
  visible: boolean;
} & AllHTMLAttributes<HTMLDivElement>;
export const WorkBox = (props: WorkBoxProps) => {
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
          <>
            <WorkContainer
              style={{
                opacity,
                transform: `scale(${scale}, ${scale})`,
              }}
              onClick={onClick}
            >
              <Slider {...settings}>
                <BadgesContainer name="Backend skills" badges={backendBadges} />
                <BadgesContainer
                  name="Frontend skills"
                  badges={frontendBadges}
                />
                <BadgesContainer name="Databases" badges={dbBadges} />
                <BadgesContainer name="UX/UI tools" badges={uxBadges} />
                <BadgesContainer name="Other" badges={otherBadges} />
              </Slider>
              <StyledImg src={cancel} onClick={onCloseClick} />
              <br />
            </WorkContainer>
          </>
        ))}
    </Transition>
  );
};
