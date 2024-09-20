import React, { useState } from "react";
import RickAndMortyCharacterCard from "../../components/RickAndMortyCharacterCard/RickAndMortyCharacterCard";
import "../../App.css";
import FormComponent from "../../components/Form/formComponent";
import HomeComponent from "../../components/Home/homeComponent";

function CharacterPage(props) {
  const [user, setUser] = useState();

  return (
    <div className="personajesram">
      {!user ? (
        <FormComponent setUser={setUser} />
      ) : (
        <HomeComponent user={user} setUser={setUser} />
      )}
      <h1 className="tituloTop">Personajes de Rick and morty</h1>
      <div className="card-contenedor">
        <div className="cards-rows">
          <RickAndMortyCharacterCard />
        </div>
      </div>
    </div>
  );
}
export default CharacterPage;
