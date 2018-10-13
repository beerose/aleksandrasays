import styled from "styled-components";
import { Color } from "../../Color";
export const StyledSvg = styled.svg`
  &:hover {
    fill: ${Color.DarkPrimaryColor};
  }

  @media (max-device-width: 690px) {
    transform: scale(1.5, 1.5);
    margin: 10px;
  }
  @media (max-device-width: 580px) {
    transform: scale(2, 2);
    margin: 15px;
  }
  @media (max-device-width: 480px) {
    transform: scale(2.2, 2.2);
    margin: 20px;
  }
`;
