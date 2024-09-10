import React from "react";
import RickAndMortyCharacterCard from "../src/components/RickAndMortyCharacterCard/RickAndMortyCharacterCard";
import "./App.css";
function App() {
  return (
    <div>
      <h1 className="tituloTop">Personajes de Rick and morty</h1>

      <RickAndMortyCharacterCard id={1} />
      <RickAndMortyCharacterCard id={2} />
      <RickAndMortyCharacterCard id={3} />
      <RickAndMortyCharacterCard id={10} />
    </div>
  );
}

export default App;
