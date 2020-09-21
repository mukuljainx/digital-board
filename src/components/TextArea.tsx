import styled from "styled-components";

const TextArea = styled.textarea<{ color?: string }>`
  border: none;
  background: none;
  position: fixed;
  ${({ color }) => (color ? `color: ${color};` : "")};
  &:focus {
    outline: none;
  }
`;

export default TextArea;
