import * as React from "react";
import styled from "styled-components";

import { IBoardSetting, BoardToolType } from "../interfaces";
import Brush from "./Brush";

interface IProps {
  settings: IBoardSetting;
  setSettings: (setting: IBoardSetting) => void;
}

const Wrapper = styled.div`
  position: fixed;
  right: 16px;
  top: 16px;
  top: 50%;
  transform: translate(0, -50%);
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  /* border-top-left-radius: 4px;
  border-bottom-left-radius: 4px; */
  border-radius: 4px;
`;

const Setting = ({ settings, setSettings }: IProps) => {
  const [selected, setSelected] = React.useState<BoardToolType>("BRUSH");

  const handleBrushSetting = (width: number, color: string) => {
    setSettings({ ...settings, width, color });
  };

  return (
    <Wrapper>
      <Brush
        onClick={(width, color) => {
          handleBrushSetting(width, color);
          setSelected("BRUSH");
        }}
        onChange={handleBrushSetting}
        selected={"BRUSH" === selected}
      />
    </Wrapper>
  );
};

export default Setting;
