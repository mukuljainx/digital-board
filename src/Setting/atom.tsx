import styled from "styled-components";

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ItemWrapper = styled.div<{ selected?: boolean; column?: boolean }>`
  ${({ column }) =>
    column
      ? `
    display: flex;
    flex-direction: column;
    align-items:center;
  `
      : ""}
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  cursor: pointer;
  padding: 0 12px;

  ${({ selected }) =>
    selected &&
    `filter: invert(0.5)
    sepia(1)
    hue-rotate(200deg)
    saturate(20)
    brightness(1)`}
`;

export const Badge = styled.span`
  padding: 4px 4px;
  background: #efefef;
  border-radius: 4px;
  font-size: 14px;
`;
