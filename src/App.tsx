import * as React from "react";
import styled from "styled-components";

import Setting from "./Setting";
import WhiteBoard from "./WhiteBoard";
import { IBoardSetting } from "./interfaces";
import { boardSettings } from "./default";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  const [settings, setSettings] = React.useState<IBoardSetting>(boardSettings);

  return (
    <Wrapper className="App">
      <WhiteBoard {...settings} />
      <Setting settings={settings} setSettings={setSettings} />
    </Wrapper>
  );
};

export default App;
