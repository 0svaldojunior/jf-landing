import { Container } from "./styles";
import aboutImg from "../../assets/AboutImg.svg"
import { useEffect, useState } from "react";

export function About() {
  const [text, setText] = useState('');

  
  useEffect(() => {
    setText(`
      Positividade e Liberdade.
  
      Trabalhando desde os 14 anos (merendeira, babá, telefonista, funcionária pública...) me formei e me pós-graduei visando auxiliar as pessoas a terem uma vida mais saudável, porém aquela vida tradicional já não me agradava mais.
  
      Há cerca de um ano resolvi me expor e aquela Maikelly que estava presa ou mais contida se tornou algo do passado.
  
      Hoje eu sou a minha melhor versão, sou eu mesma!
  
      Com minhas qualidades e defeitos para quem quiser ver.
  
      Que aceita todos como realmente são e que auxilia as pessoas a buscarem a ...
    `);
  }, []);

  return (
    <Container>
      <img src={aboutImg} alt="About Image" />
      <textarea value={text} />
    </Container>
  );
}