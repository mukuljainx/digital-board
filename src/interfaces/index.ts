export interface IBoardSetting {
  width: number;
  color: string;
  smooth: CanvasLineCap;
  highlight: boolean;
  eraser: boolean;
  text: boolean;
  fontSize: number;
}

export type BoardToolType = "BRUSH" | "HIGHLIGHTER" | "ERASER" | "TEXT";
