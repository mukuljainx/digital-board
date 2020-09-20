export interface IBoardSetting {
  width: number;
  color: string;
  smooth: CanvasLineCap;
  highlight: boolean;
  eraser: boolean;
}

export type BoardToolType = "BRUSH" | "HIGHLIGHTER" | "ERASER";
