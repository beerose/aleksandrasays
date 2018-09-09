import React from 'react';
import styled from 'styled-components';

import { arrow } from '../../assets/svg';

const StyledArrow = styled('img')`
    width: 60px;
    padding-top: 2px;
`;
  
export const Arrow: React.SFC<{}> = () => (
  <a href='/'>
    <StyledArrow src={arrow} />
  </a>
);
  
