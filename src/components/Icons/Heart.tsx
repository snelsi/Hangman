import * as React from "react";
import styled from "styled-components";

interface HeartProps {
  filled: boolean;
}
export const Heart: React.FC<HeartProps> = ({ filled = false }) => (
  <SVG
    filled={filled}
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </SVG>
);

const SVG = styled.svg<HeartProps>`
  margin: 2px;
  height: 24px;
  width: 24px;

  fill: ${({ filled }) => (filled ? "#dc3545" : "none")};
  stroke: #dc3545;
`;
