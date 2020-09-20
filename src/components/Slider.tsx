import * as React from "react";
import styled from "styled-components";

interface IProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

const Input = styled.input.attrs({ type: "range" })`
  -webkit-appearance: slider-vertical; /* WebKit */
  width: 24px;
`;

const Slider = ({ min, max, value, onChange }: IProps) => {
  return (
    <Input
      min={min}
      max={max}
      value={value}
      onChange={(event) => {
        onChange(parseInt(event.target.value));
      }}
    />
  );
};

export default Slider;
