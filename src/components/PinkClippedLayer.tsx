import styled from "styled-components";

const PinkClippedLayer = styled.article`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  clip-path: url(#pink-clip-path);
`;

export default PinkClippedLayer;
