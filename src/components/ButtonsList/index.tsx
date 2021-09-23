import { Container } from "./styles";
import backgroundImg from "../../assets/backgroundImg.png";

export function ButtonList() {
  return (
    <Container>
      <a href="https://www.instagram.com/julifigueiro_ofc/">
          <button>ONLYFANS</button>
        </a>
        <a href="https://www.instagram.com/julifigueiro_ofc/">
          <button>CLOSE FRIENDS CATÃO</button>
        </a>
        <a href="https://www.instagram.com/julifigueiro_ofc/">
          <button>CLOSE FRIENDS PIX</button>
        </a>
        <a href="https://www.instagram.com/julifigueiro_ofc/">
          <button>PRIVACY</button>
        </a>
        <a href="https://www.instagram.com/julifigueiro_ofc/">
          <button>PRÉVIA TELEGRAM</button>
        </a>

        <img src={backgroundImg} alt="Background Image" />
    </Container>
  );
}