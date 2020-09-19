import * as React from "react";

type Plots = Array<{ x: number; y: number }>;

const WhiteBoard = () => {
  const [drawing, setDrawing] = React.useState(false);
  const points = React.useRef<Plots>([]);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const canvasContext = React.useRef<CanvasRenderingContext2D | null>(null);

  // const resetPoints = () => {
  //   points.current = [points.current[1]];
  // };

  const drawOnCanvas = (plots: Plots, color = "black", width = 1) => {
    const ctx = canvasContext.current!;

    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(plots[0].x, plots[0].y);

    for (let i = 0; i < plots.length; i++) {
      ctx.lineTo(plots[i].x, plots[i].y);
    }

    ctx.stroke();
    // resetPoints();
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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="drawCanvas"
      width="800"
      height="600"
      style={{ border: "1px solid" }}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  );
};

export default WhiteBoard;
