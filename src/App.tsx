import { About } from "./components/About";
import { ButtonList } from "./components/ButtonsList";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <ButtonList />
      <About />
      <Contact />

      <GlobalStyle />
    </>
  );
}