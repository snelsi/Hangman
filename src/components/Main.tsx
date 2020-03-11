import styled from "styled-components";

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

  & > h1 {
    margin-bottom: 0.75rem;
  }
  & > svg {
    margin: auto;
  }
`;
