import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.header`
  background: rgba(0, 0, 0, 0.6);

  /* max-width: 1120px; */
  margin: 0 auto;
  
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0 0.5rem 0;


  h1, span {
    color: ${darken(0.15, '#fff')};
  }
`;