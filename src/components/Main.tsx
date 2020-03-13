import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const popup = keyframes`
  0% {
    transform: scale(1);
  }
  33% {
    transform: scale(1.02);
  }
  66% {
    transform: scale(0.99);
  }
  100% {
    transform: scale(1);
  }
`;

export const Main = styled.main`
  width: 100%;
  margin: 15px;
  width: 450px;
  padding: 1.25rem;
  min-width: 300px;
  max-width: 450px;

  min-height: 425px;

  text-align: center;
  border-radius: 24px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  position: relative;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);

  justify-content: space-between;

  & > * {
    animation: ${fadeIn} 0.25s linear;
  }
  & > h1 {
    margin-bottom: 0.75rem;
  }
  & > svg {
    margin: auto;
  }
`;
