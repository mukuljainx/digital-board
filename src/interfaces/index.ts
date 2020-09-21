export interface IBoardSetting {
  width: number;
  color: string;
  smooth: CanvasLineCap;
  tool: BoardToolType;
  fontSize: number;
}

export type BoardToolType = "BRUSH" | "HIGHLIGHTER" | "ERASER" | "TEXT";
