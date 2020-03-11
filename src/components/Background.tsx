// Forked from Mohammad Abdul Mohaiman codepen: https://codepen.io/mohaiman/pen/MQqMyo

import * as React from "react";
import styled, { keyframes } from "styled-components";

export const Background: React.FC = ({ children }) => (
  <Container>
    <Bubble left="65%" />
    <Bubble left="25%" size="80px" />
    <Bubble left="70%" animationDelay="4s" />
    <Bubble left="10%" animationDelay="2s" animationDuration="12s" />
    <Bubble left="75%" size="110px" animationDelay="3s" />
    <Bubble left="35%" size="150px" animationDelay="7s" />
    <Bubble left="40%" size="60px" animationDuration="18s" />
    <Bubble left="85%" size="150px" animationDuration="11s" />
    <Bubble left="20%" size="15px" animationDelay="2s" animationDuration="35s" />
    <Bubble left="50%" size="25px" animationDelay="15s" animationDuration="45s" />
    {children}
  </Container>
);

const Flow = keyframes`
    from {
      border-radius: 0;
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }

    to {
      border-radius: 50%;
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
    }
`;

const Container = styled.div`
  align-items: center;
  background: var(--primary-color, #4e54c8);
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

const BubbleBase = styled.span`
  animation: ${Flow} 25s linear infinite;
  background: rgba(255, 255, 255, 0.2);
  bottom: -150px;
  display: block;
  position: absolute;

  left: 0%;
  height: 20px;
  width: 20px;
`;

interface BubbleProps {
  left?: string;
  size?: string;
  animationDelay?: string;
  animationDuration?: string;
}
const Bubble = styled(BubbleBase)<BubbleProps>`
  ${({ animationDelay }) => animationDelay && `animation-delay: ${animationDelay};`}
  ${({ animationDuration }) => animationDuration && `animation-duration: ${animationDuration};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ size }) => size && `height: ${size}; width: ${size};`}
`;
