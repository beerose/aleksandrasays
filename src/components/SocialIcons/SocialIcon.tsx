import React from 'react';
import styled from 'styled-components';

type Props = {
  linkTo: string;
  imgSrc: string;
};

const StyledImg = styled('img')`
  width: 80%;
  padding: 10px;
`;

export class SocialIcon extends React.Component<Props, {}> {
  render() {
    const { linkTo, imgSrc } = this.props;
    return (
      <a href={linkTo} target={'_blank'} style={{textDecoration: 'none'}}>
        <StyledImg src={imgSrc} />
      </a>
    );
  }
}
