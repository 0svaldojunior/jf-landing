import styled from "styled-components";

export const Container = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background: var(--background-contact);
`;

export const Content = styled.div`
  max-width: 1120px;
  width: 100%;
  margin-top: 1.25rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
