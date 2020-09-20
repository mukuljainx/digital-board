import * as React from "react";
import styled from "styled-components";

interface IProps {
  onChange: (color: string) => void;
  addColor: (color: string) => void;
  updateColor: (i: number, color: string) => void;
  removeColor: (i: number) => void;
  value: string;
  colors: string[];
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input.attrs({ type: "color" })`
  -webkit-appearance: none;
  border: none;
  width: 0;
  height: 0;
  position: absolute;
  opacity: 0;
`;

const Color = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid #efefef;
  border-radius: 100%;
`;

const Icon = styled.div<{ disabled: boolean }>`
  border: 1px solid #efefef;
  font-size: 24px;
  align-items: flex-end;
  border-radius: 100px;
  width: 24px;
  height: 24px;
  margin: 4px;
  display: flex;
  justify-content: center;
  ${({ disabled }) =>
    disabled
      ? `
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
  `
      : ""}
`;

const RemoveIcon = styled.button`
  position: absolute;

  top: -6px;
  right: -4px;
  background: white;
  border-radius: 100%;
  height: 14px;
  width: 14px;
  font-size: 8px;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #efefef;
  padding: 0;
  display: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #efefef;
  }
`;

const ColorWrapper = styled.div`
  margin: 4px;
  position: relative;
  &:hover {
    ${RemoveIcon} {
      display: block;
    }
  }
`;

const ColorPicker = ({
  value,
  onChange,
  colors,
  addColor,
  removeColor,
  updateColor,
}: IProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleColorClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
      addColor("rgb(0,0,0)");
    }
  };

  const handleColorChange = (event: React.MouseEvent) => {
    onChange((event.target as HTMLDivElement).getAttribute("data-color")!);
  };

  const handleColorUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateColor(colors.length - 1, event.target.value);
  };

  const handleRemoveClick = (event: React.MouseEvent) => {
    removeColor(
      parseInt((event.target as HTMLDivElement).getAttribute("data-index")!)
    );
  };

  return (
    <Wrapper>
      {colors.map((color, index) => (
        <ColorWrapper key={index}>
          <RemoveIcon data-index={index} onClick={handleRemoveClick}>
            <span data-index={index}>X</span>
          </RemoveIcon>
          <Color
            style={{ background: color }}
            data-color={color}
            onClick={handleColorChange}
          />
        </ColorWrapper>
      ))}

      <Icon disabled={colors.length === 12} onClick={handleColorClick}>
        &#43;
      </Icon>
      <Input ref={inputRef} value={value} onChange={handleColorUpdate} />
    </Wrapper>
  );
};

export default ColorPicker;
