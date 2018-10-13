import styled from "styled-components";

const TopColorClippedLayer = styled.article`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  clip-path: url(#top-color-clip-path);
`;

export default TopColorClippedLayer;
