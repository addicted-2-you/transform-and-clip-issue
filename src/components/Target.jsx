import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getShapeCssMask } from "../shapes";

function Target() {
  const videoRef = React.createRef(null);

  const scale = useSelector((state) => state.app.scale);
  const shape = useSelector((state) => state.app.shape);

  React.useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.addEventListener("loadedmetadata", () => {
          videoRef.current.play();
        });
      });
  });

  return (
    <Container scale={scale} shape={shape}>
      <Video ref={videoRef} shape={shape}></Video>
    </Container>
  );
}

const Container = styled.div`
  height: 256px;
  width: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: purple;
  transform: scale(${({ scale }) => scale});
  /* overflow: hidden; */
  clip-path: ${({ shape }) => getShapeCssMask(shape)};
`;

const Video = styled.video`
  height: 100%;
  /* height: 85%; */
`;

export default Target;
