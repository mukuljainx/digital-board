import * as React from "react";
import { IBoardSetting } from "../interfaces";
import { boardSettings } from "../default";
import { debug } from "console";

type Plots = Array<{ x: number; y: number }>;

type IProps = Partial<IBoardSetting>;

const WhiteBoard = (dirtyProps: IProps) => {
  const props = { ...boardSettings, ...dirtyProps };

  const [drawing, setDrawing] = React.useState(false);
  const points = React.useRef<Plots>([]);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const canvasContext = React.useRef<CanvasRenderingContext2D | null>(null);

  const resetPoints = () => {
    if (points.current.length > 1) {
      points.current = [points.current[1]];
    }
  };

  const drawOnCanvas = (plots: Plots) => {
    const ctx = canvasContext.current!;

    ctx.lineWidth = props.width;
    ctx.lineCap = props.smooth!;
    ctx.strokeStyle = props.color;

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

  React.useEffect(() => {
    canvasContext.current = canvasRef.current!.getContext("2d");
    canvasRef.current!.height = document.body.offsetHeight;
    canvasRef.current!.width = document.body.offsetWidth;
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="drawCanvas"
      width="100%"
      height="100%"
      style={{ border: "1px solid" }}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  );
};

export default WhiteBoard;
