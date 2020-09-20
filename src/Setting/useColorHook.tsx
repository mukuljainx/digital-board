import * as React from "react";

import { colors as defaultColors } from "../default";

const useColor = (
  custom?: string[]
): {
  colors: string[];
  addColor: (color: string) => void;
  removeColor: (i: number) => void;
  updateColor: (i: number, color: string) => void;
} => {
  const [colors, setColors] = React.useState(custom || defaultColors);

  const addColor = (color: string) => {
    setColors((prevColors) => {
      if (prevColors.length < 12) {
        return [...prevColors, color];
      } else {
        return prevColors;
      }
    });
  };

  const removeColor = (j: number) => {
    setColors((prevColors) => prevColors.filter((__, i) => i !== j));
  };

  const updateColor = (j: number, newColor: string) => {
    setColors((prevColors) =>
      prevColors.map((color, i) => (i !== j ? color : newColor))
    );
  };

  return { colors, addColor, removeColor, updateColor };
};

export default useColor;
