import * as React from "react";
import styled from "styled-components";

interface IProps {
  onChange: (color: string) => void;
  value: string;
}

const Wrapper = styled.div`
  position: relative;
`;

const Input = styled.input.attrs({ type: "color" })`
  -webkit-appearance: none;
  border: none;
  width: 0;
  height: 0;
  position: absolute;
  opacity: 0;
`;

const Color = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  width: 24px;
  height: 24px;
  border: 1px solid #efefef;
  border-radius: 100%;
`;

const ColorPicker = ({ value, onChange }: IProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleColorClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <Wrapper>
      <Color onClick={handleColorClick} color={value} />
      <Input
        ref={inputRef}
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
    </Wrapper>
  );
};

export default ColorPicker;
