import * as React from "react";
import styled from "styled-components";

interface IProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

const Input = styled.input.attrs({ type: "range" })`
  width: 120px;
  margin: 0 8px;

  &::-webkit-slider-thumb {
    cursor: pointer;
  }
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
