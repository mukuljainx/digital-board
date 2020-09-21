import * as React from "react";
import styled from "styled-components";

import { IBoardSetting } from "../interfaces";
import Brush from "./Brush";
import Highlighter from "./Highlighter";
import Eraser from "./Eraser";
import Text from "./Text";

interface IProps {
  settings: IBoardSetting;
  setSettings: React.Dispatch<React.SetStateAction<IBoardSetting>>;
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
  border-radius: 4px;
`;

const Setting = ({ settings, setSettings }: IProps) => {
  const updateSetting = React.useCallback(
    (newSettings: Partial<IBoardSetting>) => {
      setSettings((prevState) => ({
        ...prevState,
        ...newSettings,
      }));
    },
    [setSettings]
  );

  return (
    <Wrapper>
      <Brush
        onClick={() => {
          updateSetting({ tool: "BRUSH" });
        }}
        onChange={updateSetting}
        selected={"BRUSH" === settings.tool}
      />
      <Text
        onClick={() => {
          updateSetting({ tool: "TEXT" });
        }}
        onChange={updateSetting}
        selected={"TEXT" === settings.tool}
      />
      <Highlighter
        onClick={() => {
          updateSetting({ tool: "HIGHLIGHTER" });
        }}
        onChange={updateSetting}
        selected={"HIGHLIGHTER" === settings.tool}
      />
      <Eraser
        onClick={() => {
          updateSetting({ tool: "ERASER" });
        }}
        onChange={updateSetting}
        selected={"ERASER" === settings.tool}
      />
    </Wrapper>
  );
};

export default Setting;
