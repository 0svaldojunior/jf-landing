import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 1080px) {
      margin-top: 6rem;
    }

    @media (max-width: 720px) {
      margin-top: 4rem;
    }

    @media (max-width: 350px) {
      margin-top: 0.8rem;
    }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 7.5rem;

  button {
    @media (max-width: 1080px) {
      width: 20rem;
    }

    @media (max-width: 720px) {
      width: 20rem;
      height: 3rem;
    }

    max-width: 100%;
    width: 32rem;
    height: 4rem;
    
    border-radius: 0.8rem;
    border: 0;
    background: var(--background-button);
    margin: 0.35rem;

    font-size: 1.2rem;
    color: var(--text-white)
  }

  img {
    width: 100%;
    max-height: 1625px;
    position: absolute;
    top: 0;
    z-index: -2;
    
    filter: brightness(0.5);
  }
`;