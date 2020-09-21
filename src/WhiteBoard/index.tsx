import * as React from "react";
import styled from "styled-components";

import { IBoardSetting } from "../interfaces";
import { boardSettings } from "../default";
import TextArea from "../components/TextArea";

type Plots = Array<{ x: number; y: number }>;

type IProps = Partial<IBoardSetting>;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div<{ text: boolean }>`
  ${Canvas} {
    cursor: ${({ text }) => (text ? "text" : "crosshair")};
  }
  position: relative;
  height: 100%;
  width: 100%;
`;

const Button = styled.button`
  position: fixed;
  right: 16px;
  bottom: 16px;
  background: white;
  border: 2px solid #efefef;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #efefef;
  }
  &:focus {
    outline: none;
  }
`;

const WhiteBoard = (dirtyProps: IProps) => {
  const props = { ...boardSettings, ...dirtyProps };

  const [drawing, setDrawing] = React.useState(false);
  const [
    textareaStyle,
    setTextAreaStyle,
  ] = React.useState<React.CSSProperties | null>(null);
  const points = React.useRef<Plots>([]);
  const imageData = React.useRef<any>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const highlightRef = React.useRef<HTMLCanvasElement>(null);
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
  const [dimension, setDimension] = React.useState<{
    height: number;
    width: number;
  } | null>(null);

  React.useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, [textareaStyle]);

  React.useEffect(() => {
    window.onresize = () => {
      const ctx = canvasRef.current!.getContext("2d")!;
      imageData.current = ctx.getImageData(
        0,
        0,
        canvasRef.current!.offsetWidth,
        canvasRef.current!.offsetHeight
      );
      setDimension({
        height: document.body.offsetHeight,
        width: document.body.offsetWidth,
      });
    };
  }, []);

  React.useLayoutEffect(() => {
    if (imageData.current) {
      const ctx = canvasRef.current!.getContext("2d")!;
      ctx.putImageData(imageData.current, 0, 0);
    }
    imageData.current = null;
  }, [dimension]);

  const resetPoints = () => {
    if (points.current.length > 1) {
      points.current = [points.current[1]];
    }
  };

  const clearBoard = () => {
    if (highlightRef.current) {
      highlightRef
        .current!.getContext("2d")!
        .clearRect(
          0,
          0,
          highlightRef.current!.offsetWidth,
          highlightRef.current!.offsetHeight
        );
    }
    canvasRef
      .current!.getContext("2d")!
      .clearRect(
        0,
        0,
        canvasRef.current!.offsetWidth,
        canvasRef.current!.offsetHeight
      );
  };

  const handleTextAreaBlur = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    const ctx = canvasRef.current!.getContext("2d")!;
    ctx.font = `${props.fontSize}px Arial`;
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = props.color;
    ctx.fillText(
      value,
      parseInt(textareaStyle!.left as string, 10),
      parseInt(textareaStyle!.top as string, 10) + props.fontSize
    );
    setTextAreaStyle(null);
  };

  const drawOnCanvas = (plots: Plots) => {
    const ctx =
      props.tool === "HIGHLIGHTER"
        ? highlightRef.current!.getContext("2d")!
        : canvasRef.current!.getContext("2d")!;

    ctx.lineWidth = props.width;
    ctx.lineCap = props.smooth!;
    ctx.strokeStyle = props.color;

    if (props.tool === "ERASER") {
      ctx.globalCompositeOperation = "destination-out";
    } else {
      ctx.globalCompositeOperation = "source-over";
    }

    ctx.beginPath();
    ctx.moveTo(plots[0].x, plots[0].y);

    for (let i = 0; i < plots.length; i++) {
      ctx.lineTo(plots[i].x, plots[i].y);
    }
    resetPoints();

    ctx.stroke();
  };

  const handleMouseMove = (reactEvent: React.MouseEvent) => {
    const event = reactEvent.nativeEvent;
    if (drawing) {
      const x = event.offsetX;
      const y = event.offsetY;
      points.current.push({ x, y });
      drawOnCanvas(points.current);
    }
  };

  const handleMouseDown = (reactEvent: React.MouseEvent) => {
    const plots = points.current;
    const event = reactEvent.nativeEvent;
    const x = event.offsetX;
    const y = event.offsetY;

    if (props.tool === "TEXT") {
      if (textareaStyle) {
        return;
      }
      setTextAreaStyle({ top: y, left: x, fontSize: props.fontSize });
      return;
    }

    if (plots[0]) {
      const distance = Math.sqrt((x - plots[0].x) ^ (2 + (y - plots[0].y)) ^ 2);
      if (distance < props.width) return;
    }
    points.current.push({ x, y });
    drawOnCanvas(plots);
    setDrawing(true);
  };

  const handleMouseUp = () => {
    if (props.tool === "TEXT") {
      return;
    }
    points.current = [];
    setDrawing(false);
  };

  React.useLayoutEffect(() => {
    setDimension({
      height: document.body.offsetHeight,
      width: document.body.offsetWidth,
    });
  }, []);

  return (
    <Wrapper text={props.tool === "TEXT"}>
      <Canvas
        ref={canvasRef}
        width={dimension ? dimension.width : "100%"}
        height={dimension ? dimension.height : "100%"}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
      {props.tool === "HIGHLIGHTER" && (
        <Canvas
          style={{ opacity: 0.5 }}
          ref={highlightRef}
          width={dimension ? dimension.width : "100%"}
          height={dimension ? dimension.height : "100%"}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
      )}
      {textareaStyle && (
        <TextArea
          ref={textAreaRef}
          rows={2000}
          cols={2000}
          onBlur={handleTextAreaBlur}
          style={textareaStyle}
        />
      )}
      <Button onClick={clearBoard}>Clear Board</Button>
    </Wrapper>
  );
};

export default WhiteBoard;
