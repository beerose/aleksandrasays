import styled from "styled-components";

export const StyledCancel = styled.img`
  position: absolute;
  top: 0;
  right: 0;

  --size: 20px;
  width: var(--size);
  height: var(--size);
  transform: translate3d(50%, -50%, 0);
  cursor: pointer;

  @media (max-device-width: 650px) {
    --size: 30px;
  }
  @media (max-device-width: 580px) {
    --size: 40px;
  }
  @media (max-device-width: 480px) {
    --size: 50px;
  }
`;