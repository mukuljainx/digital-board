import * as React from "react";

type Plots = Array<{ x: number; y: number }>;

const App = () => {
  const [drawing, setDrawing] = React.useState(false);
  const points = React.useRef<Plots>([]);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const canvasContext = React.useRef<CanvasRenderingContext2D | null>(null);

  const drawOnCanvas = (plots: Plots, color = "black") => {
    const ctx = canvasContext.current!;
    console.log("drawOnCanvas");
    ctx.beginPath();
    ctx.moveTo(plots[0].x, plots[0].y);

    for (var i = 1; i < plots.length; i++) {
      ctx.lineTo(plots[i].x, plots[i].y);
    }
    ctx.stroke();
  };

  const handleMouseMove = (reactEvent: React.MouseEvent) => {
    const event = reactEvent.nativeEvent;
    if (drawing) {
      const x = event.offsetX;
      const y = event.offsetY;

      points.current.push({ x: x, y: y });
      console.log(points.current);
      drawOnCanvas(points.current);
    }
  };

  const handleMouseDown = (event: any) => {
    console.log(event);
    setDrawing(true);
  };

  const handleMouseUp = () => {
    points.current = [];
    setDrawing(false);
  };

  React.useEffect(() => {
    canvasContext.current = canvasRef.current!.getContext("2d");
  }, []);

  return (
    <div className="App">
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
    </div>
  );
};

export default App;
