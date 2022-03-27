import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { decrementScale, incrementScale } from "../store/app.slice";

function ScalePicker() {
  const dispatch = useDispatch();

  return (
    <Container>
      <ScalePickerButton onClick={() => dispatch(incrementScale())}>
        +
      </ScalePickerButton>

      <Divider />

      <ScalePickerButton onClick={() => dispatch(decrementScale())}>
        -
      </ScalePickerButton>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 64px;
`;

const ScalePickerButton = styled.button`
  height: 64px;
  width: 64px;
  display: block;
  font-size: 3rem;
  font-weight: bolder;
  background-color: #cbcbcbaa;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #cbcbcb;
  }

  &:focus {
    outline: none;
  }
`;

const Divider = styled.div`
  height: 2px;
  width: 100%;
  border-radius: 10px;
  background-color: #000000;
`;

export default ScalePicker;
