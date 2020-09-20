import * as React from "react";
import styled from "styled-components";

import { IBoardSetting } from "../interfaces";
import eraser from "../assets/eraser.svg";
import Popup from "../components/Popup";
import Slider from "../components/Slider";
import { ItemWrapper, Icon } from "./atom";

interface IProps {
  selected: boolean;
  onChange: (params: Pick<IBoardSetting, "width">) => void;
  onClick: () => void;
}

const Wrapper = styled.div`
  background: white;
  padding: 8px 0;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const Brush = ({ selected, onChange, onClick }: IProps) => {
  const [width, setWidth] = React.useState(1);
  const firstRun = React.useRef(true);

  React.useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    onChange({ width });
  }, [width]);

  return (
    <Popup
      allowed={selected}
      offset={{ x: -8 }}
      trigger={
        <ItemWrapper
          onClick={() => {
            onClick();
            onChange({ width: width * 3 });
          }}
          selected={selected}
        >
          <Icon src={eraser} />
        </ItemWrapper>
      }
    >
      <Wrapper>
        <ItemWrapper>
          <Slider
            value={width}
            min={1}
            max={5}
            onChange={(width) => setWidth(width * 3)}
          />
        </ItemWrapper>
      </Wrapper>
    </Popup>
  );
};

export default React.memo(Brush);
