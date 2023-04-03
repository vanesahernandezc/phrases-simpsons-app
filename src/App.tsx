import CharacterContainer from "./components/CharacterContainer";
import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=3"
    );
    const frase = await api.json();
    setCharacters(frase);
  };

  return (
    <Container>
      <Header />
      {!characters ? (
        <Welcome reqApi={reqApi} />
      ) : (
        <CharacterContainer characters={characters} reqApi={reqApi} />
      )}
    </Container>
  );
}

export default App;
