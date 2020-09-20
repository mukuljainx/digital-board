import styled from "styled-components";

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ItemWrapper = styled.div<{ selected?: boolean }>`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  cursor: pointer;
  padding: 0 8px;

  ${({ selected }) =>
    selected &&
    `filter: invert(0.5)
    sepia(1)
    hue-rotate(200deg)
    saturate(20)
    brightness(1)`}
`;
