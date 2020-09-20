import * as React from "react";
import styled from "styled-components";

import { IBoardSetting, BoardToolType } from "../interfaces";
import Brush from "./Brush";
import Highlighter from "./Highlighter";
import { boardSettings } from "../default";
import Eraser from "./Eraser";

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
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  /* border-top-left-radius: 4px;
  border-bottom-left-radius: 4px; */
  border-radius: 4px;
`;

const Setting = ({ setSettings }: IProps) => {
  const [selected, setSelected] = React.useState<BoardToolType>("BRUSH");

  const updateSetting = (settings: Partial<IBoardSetting>) => {
    setSettings({
      ...boardSettings,
      ...settings,
    });
  };

  return (
    <Wrapper>
      <Brush
        onClick={() => {
          setSelected("BRUSH");
        }}
        onChange={updateSetting}
        selected={"BRUSH" === selected}
      />
      <Highlighter
        onClick={() => {
          setSelected("HIGHLIGHTER");
        }}
        onChange={(params) => updateSetting({ ...params, highlight: true })}
        selected={"HIGHLIGHTER" === selected}
      />
      <Eraser
        onClick={() => {
          setSelected("ERASER");
        }}
        onChange={(params) => updateSetting({ ...params, eraser: true })}
        selected={"ERASER" === selected}
      />
    </Wrapper>
  );
};

export default Setting;
