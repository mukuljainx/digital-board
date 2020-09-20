import * as React from "react";
import styled from "styled-components";

import brush from "../assets/brush.svg";
import Popup from "../components/Popup";
import ColorPicker from "../components/ColorPicker";
import Slider from "../components/Slider";
import { ItemWrapper, Icon } from "./atom";
import { IBoardSetting } from "../interfaces";

interface IProps {
  selected: boolean;
  onChange: (params: Pick<IBoardSetting, "color" | "width">) => void;
  onClick: () => void;
}

const Wrapper = styled.div`
  background: white;
  padding: 8px 0;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const Brush = ({ selected, onChange, onClick }: IProps) => {
  const [color, setColor] = React.useState("black");
  const [width, setWidth] = React.useState(1);
  const firstRun = React.useRef(true);

  React.useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    onChange({ width, color });
  }, [width, color]);

  return (
    <Popup
      allowed={selected}
      offset={{ x: -8, y: -8 }}
      trigger={
        <ItemWrapper
          onClick={() => {
            onClick();
            onChange({ width, color });
          }}
          selected={selected}
        >
          <Icon src={brush} />
        </ItemWrapper>
      }
    >
      <Wrapper>
        <ItemWrapper>
          <ColorPicker value={color} onChange={(color) => setColor(color)} />
        </ItemWrapper>
        <ItemWrapper>
          <Slider
            value={width}
            min={1}
            max={24}
            onChange={(width) => setWidth(width)}
          />
        </ItemWrapper>
      </Wrapper>
    </Popup>
  );
};

export default React.memo(Brush);
