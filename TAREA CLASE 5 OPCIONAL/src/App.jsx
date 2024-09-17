import React, { useState } from "react";
import RickAndMortyCharacterCard from "../src/components/RickAndMortyCharacterCard/RickAndMortyCharacterCard";
import "./App.css";
import FormComponent from "./components/Form/formComponent";
import HomeComponent from "./components/Home/homeComponent";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="personajesram">
      {!user ? (
        <FormComponent setUser={setUser} />
      ) : (
        <HomeComponent user={user} setUser={setUser} />
      )}
      <h1 className="tituloTop">Personajes de Rick and morty</h1>
      <div className="cards-rows">
        <RickAndMortyCharacterCard id={1} />
        <RickAndMortyCharacterCard id={2} />
        <RickAndMortyCharacterCard id={3} />
        <RickAndMortyCharacterCard id={10} />
      </div>
    </div>
  );
}

export default App;
