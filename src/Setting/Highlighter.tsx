import * as React from "react";
import styled from "styled-components";

import { IBoardSetting } from "../interfaces";
import highlighter from "../assets/highlighter.svg";
import Popup from "../components/Popup";
import ColorPicker from "../components/ColorPicker";
import { ItemWrapper, Icon } from "./atom";
import useColor from "./useColorHook";

interface IProps {
  selected: boolean;
  onChange: (params: Pick<IBoardSetting, "color" | "width">) => void;
  onClick: () => void;
}

const Wrapper = styled.div`
  background: white;
  padding: 16px 0;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const HighLighter = ({ selected, onChange, onClick }: IProps) => {
  const [color, setColor] = React.useState("#FFFF00");
  const picker = useColor();
  const firstRun = React.useRef(true);

  React.useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    onChange({ width: 5, color: color });
  }, [color, picker.colors, onChange]);

  return (
    <Popup
      allowed={selected}
      offset={{ x: -8, y: -12 }}
      trigger={
        <ItemWrapper
          onClick={() => {
            onClick();
            onChange({ width: 5, color: color });
          }}
          selected={selected}
        >
          <Icon src={highlighter} />
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
      </Wrapper>
    </Popup>
  );
};

export default React.memo(HighLighter);
