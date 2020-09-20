import * as React from "react";
import { IBoardSetting } from "../interfaces";
import { boardSettings } from "../default";
import styled from "styled-components";

type Plots = Array<{ x: number; y: number }>;

type IProps = Partial<IBoardSetting>;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
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
  const points = React.useRef<Plots>([]);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const highlightRef = React.useRef<HTMLCanvasElement>(null);
  const [dimension, setDimension] = React.useState<{
    height: number;
    width: number;
  } | null>(null);

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

  const drawOnCanvas = (plots: Plots) => {
    const ctx = props.highlight
      ? highlightRef.current!.getContext("2d")!
      : canvasRef.current!.getContext("2d")!;

    ctx.lineWidth = props.width;
    ctx.lineCap = props.smooth!;
    ctx.strokeStyle = props.color;

    if (props.eraser) {
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
    console.log("handleMouseDown");
    const plots = points.current;
    const event = reactEvent.nativeEvent;
    const x = event.offsetX;
    const y = event.offsetY;
    if (plots[0]) {
      const distance = Math.sqrt((x - plots[0].x) ^ (2 + (y - plots[0].y)) ^ 2);
      if (distance < props.width) return;
    }
    points.current.push({ x, y });
    drawOnCanvas(plots);
    setDrawing(true);
  };

  const handleMouseUp = () => {
    console.log("handleMouseUp");
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
    <Wrapper>
      <Canvas
        ref={canvasRef}
        width={dimension ? dimension.width : "100%"}
        height={dimension ? dimension.height : "100%"}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      {props.highlight && (
        <Canvas
          style={{ opacity: 0.5 }}
          ref={highlightRef}
          width={dimension ? dimension.width : "100%"}
          height={dimension ? dimension.height : "100%"}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
      )}
      <Button onClick={clearBoard}>Clear Board</Button>
    </Wrapper>
  );
};

export default WhiteBoard;
