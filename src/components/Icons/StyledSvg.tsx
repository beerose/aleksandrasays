import styled from "styled-components";
import { Color } from "../../Color";
export const StyledSvg = styled.svg`
  &:hover {
    fill: ${Color.DarkPrimaryColor};
  }

  @media (max-device-width: 650px) {
    transform: scale(2.8, 2.8);
    margin: 30px;
  }
`;
