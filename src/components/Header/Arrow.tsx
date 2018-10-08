import React from 'react';
import styled from 'styled-components';

import { arrow } from '../../assets/svg';
import { Link } from 'react-router-dom';

const StyledArrow = styled('img')`
    width: 60px;
    position: absolute;
    top: 15px;
    left: 15px;
`;

export const Arrow: React.SFC<{}> = () => (
  <Link to={'/'}>
    <StyledArrow src={arrow} />
  </Link>
);
