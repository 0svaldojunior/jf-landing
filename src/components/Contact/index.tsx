import { Container, Content } from "./styles";

import contactImg from "../../assets/contact.svg";
import wppImg from "../../assets/wpp.svg";
import instaImg from "../../assets/insta.svg";
import ttImg from "../../assets/tt.svg";
import tiktokImg from "../../assets/tiktok.svg";

export function Contact() {
  return (
    <Container>
      <img src={contactImg} alt="Contact Image" />

      <Content>
        <a href="#">
          <img src={wppImg} alt="Wpp Image" />
        </a>
        <a href="#">
          <img src={instaImg} alt="Insta Image" />
        </a>
        <a href="#">
          <img src={ttImg} alt="TT Image" />
        </a>
        <a href="#">
          <img src={tiktokImg} alt="Tiktok Image" />
        </a>
      </Content>
    </Container>
  );
}