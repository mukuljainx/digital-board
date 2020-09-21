import * as React from "react";
import styled from "styled-components";

import font from "../assets/font.svg";
import Popup from "../components/Popup";
import ColorPicker from "../components/ColorPicker";
import { ItemWrapper, Icon, Badge } from "./atom";
import { IBoardSetting } from "../interfaces";
import useColor from "./useColorHook";

interface IProps {
  selected: boolean;
  onChange: (params: Pick<IBoardSetting, "color" | "fontSize">) => void;
  onClick: () => void;
}

const Wrapper = styled.div`
  background: white;
  padding: 16px 0;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const FontSizeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FontSize = styled.div<{ selected: boolean }>`
  &:not(:last-child) {
    margin-right: 4px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid;
  padding: 0 2px 2px;
  border-color: ${({ selected }) => (selected ? "#ddd" : "white")};
`;

const Font = styled.p<{ size: number }>`
  font-size: ${({ size }) => size}px;
  height: 20px;
  line-height: 20px;
  margin: 8px;
`;

const Text = ({ selected, onChange, onClick }: IProps) => {
  const [fontSize, setFontSize] = React.useState(14);
  const firstRun = React.useRef(true);
  const picker = useColor();
  const [color, setColor] = React.useState("#000000");

  const handleFontSizeClick = (event: React.MouseEvent) => {
    setFontSize(
      parseInt((event.target as HTMLDivElement).getAttribute("data-size")!)
    );
  };

  React.useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    onChange({ fontSize, color });
  }, [fontSize, color, onChange]);

  return (
    <Popup
      allowed={selected}
      offset={{ x: -8, y: -12 }}
      trigger={
        <ItemWrapper
          onClick={() => {
            debugger;
            onClick();
            onChange({ fontSize, color });
          }}
          selected={selected}
        >
          <Icon src={font} />
        </ItemWrapper>
      }
    >
      <Wrapper style={{ width: "120px" }}>
        <ItemWrapper>
          <ColorPicker
            {...picker}
            value={color}
            onChange={(color) => setColor(color)}
          />
        </ItemWrapper>
        <ItemWrapper>
          <FontSizeWrapper>
            {[12, 14, 18].map((size) => (
              <FontSize
                key={size}
                onClick={handleFontSizeClick}
                data-size={size}
                selected={fontSize === size}
              >
                <Font data-size={size} size={size}>
                  T
                </Font>
                <Badge data-size={size}>{size}</Badge>
              </FontSize>
            ))}
          </FontSizeWrapper>
        </ItemWrapper>
      </Wrapper>
    </Popup>
  );
};

export default Text;
