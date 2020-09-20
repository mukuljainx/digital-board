import styled from "styled-components";

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ItemWrapper = styled.div<{ selected?: boolean; flex?: boolean }>`
  ${({ flex }) =>
    flex
      ? `
    display: flex;
    align-items:center;
  `
      : ""}
  &:not(:last-child) {
    padding-bottom: 12px;
    margin-bottom: 12px;
    border-bottom: 1px solid #efefef;
  }
  cursor: pointer;
  padding: 0 12px;

  ${({ selected }) =>
    selected &&
    `img{filter: invert(0.5)
    sepia(1)
    hue-rotate(200deg)
    saturate(20)
    brightness(1)}`}
`;

export const Badge = styled.span`
  padding: 4px 4px;
  background: #efefef;
  border-radius: 4px;
  font-size: 14px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
`;
