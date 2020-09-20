import { IBoardSetting } from "../interfaces";

export const boardSettings: IBoardSetting = {
  width: 2,
  color: "black",
  smooth: "round" as IBoardSetting["smooth"],
  highlight: false,
  eraser: false,
  text: false,
  fontSize: 14,
};

export const colors = [
  "#000000",
  "#F7412D",
  "#47B04B",
  "#FFC100",
  "#FFC100",
  "#9D1BB2",
  "#EC1661",
];
