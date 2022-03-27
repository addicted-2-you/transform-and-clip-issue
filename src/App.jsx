import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

// components
import ScalePicker from "./components/ScalePicker";
import Target from "./components/Target";

function App() {
  const scale = useSelector((state) => state.app.scale);

  return (
    <Container>
      <ScalePicker />

      <ScaleData>{scale}</ScaleData>

      <Target />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScaleData = styled.h1`
  position: absolute;
  right: 0;
  left: 0;
  margin: auto;
`;

export default App;
