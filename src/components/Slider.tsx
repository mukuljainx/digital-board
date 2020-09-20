import * as React from "react";
import styled from "styled-components";

interface IProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

const Wrapper = styled.div`
  height: 100px;
  position: relative;
  width: 20px;
`;

const Input = styled.input.attrs({ type: "range" })`
  width: 100px;
  height: 20px;
  margin: 0;
  transform-origin: 50px 50px;
  transform: rotate(-90deg);
  position: absolute;
  left: 0px;
  top: 0px;

  &::-webkit-slider-thumb {
    cursor: pointer;
  }
`;

const Slider = ({ min, max, value, onChange }: IProps) => {
  return (
    <Wrapper>
      <Input
        min={min}
        max={max}
        value={value}
        onChange={(event) => {
          onChange(parseInt(event.target.value));
        }}
      />
    </Wrapper>
  );
};

export default Slider;
