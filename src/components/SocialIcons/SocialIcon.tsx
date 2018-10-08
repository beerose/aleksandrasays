import React from 'react';
import styled from 'styled-components';

type Props = {
  linkTo: string;
  imgSrc: string;
  style?: string;
};

const StyledImg = styled('img')`
  width: 100%;
  position: relative;
`;

export class SocialIcon extends React.Component<Props, {}> {
  render() {
    const { linkTo, imgSrc, style } = this.props;
    return (
      <a href={linkTo} target={'_blank'}
        style={{textDecoration: 'none', width: '40px',margin: '7px', height: '40px'}}>
        <StyledImg src={imgSrc} className={style}/>
      </a>
    );
  }
}
