export interface IBoardSetting {
  width: number;
  color: string;
  smooth: CanvasLineCap;
  highlight: boolean;
}

export type BoardToolType = "BRUSH" | "HIGHLIGHTER" | "ERASER";
