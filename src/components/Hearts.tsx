import * as React from "react";
import styled from "styled-components";
import { Heart } from "components";

interface HeartsProps {
  bars: number;
  value: number;
}
export const Hearts: React.FC<HeartsProps> = ({ bars = 8, value = 0 }) => (
  <Bar>
    {[...Array(bars)].map((_, index) => (
      <Heart key={index} filled={index + 1 <= value} />
    ))}
  </Bar>
);

const Bar = styled.div`
  text-align: center;
  height: 32px;
`;
