import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-top: 2rem;

  background: var(--background-about);

  img {
    width: 100%;
    background: transparent;
    border: 0;
  }

  textarea {
    background: transparent;
    border: 0;
    margin: 0.65rem;
    color: var(--text-white);
  }
`;