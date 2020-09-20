import * as React from "react";
import styled from "styled-components";

import { IBoardSetting, BoardToolType } from "../interfaces";
import Brush from "./Brush";
import Highlighter from "./Highlighter";
import { boardSettings } from "../default";

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

  const handleBrushSettingChange = (
    settings: Pick<IBoardSetting, "color" | "width">
  ) => {
    setSettings({
      ...boardSettings,
      ...settings,
    });
  };

  const handleHighlighterSettingChange = (
    settings: Pick<IBoardSetting, "color" | "width">
  ) => {
    setSettings({
      ...boardSettings,
      ...settings,
      highlight: true,
    });
  };

  return (
    <Wrapper>
      <Brush
        onClick={() => {
          setSelected("BRUSH");
        }}
        onChange={handleBrushSettingChange}
        selected={"BRUSH" === selected}
      />
      <Highlighter
        onClick={() => {
          setSelected("HIGHLIGHTER");
        }}
        onChange={handleHighlighterSettingChange}
        selected={"HIGHLIGHTER" === selected}
      />
    </Wrapper>
  );
};

export default Setting;
