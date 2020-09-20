import * as React from "react";
import { IBoardSetting } from "../interfaces";

type Plots = Array<{ x: number; y: number }>;

type IProps = Partial<IBoardSetting>;

const defaultProps = {
  width: 2,
  color: "black",
  smooth: "round" as IProps["smooth"],
};

const WhiteBoard = (dirtyProps: IProps) => {
  const props = { ...defaultProps, ...dirtyProps };

  const [drawing, setDrawing] = React.useState(false);
  const points = React.useRef<Plots>([]);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const canvasContext = React.useRef<CanvasRenderingContext2D | null>(null);

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
    const event = reactEvent.nativeEvent;
    const x = event.offsetX;
    const y = event.offsetY;
    points.current.push({ x, y });
    drawOnCanvas(points.current);
    setDrawing(true);
  };

  const handleMouseUp = () => {
    console.log("handleMouseUp");
    if (points.current.length === 1) {
      drawOnCanvas([
        points.current[0],
        { x: points.current[0].x + 1, y: points.current[0].y + 1 },
      ]);
    }
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
