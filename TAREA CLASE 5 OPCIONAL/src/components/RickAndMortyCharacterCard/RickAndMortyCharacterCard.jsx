import React, { useState, useEffect } from "react";
import CharacterCard from "../characterCard/CharacterCard";

function RickAndMortyCharacterCard(props) {
  const url = "https://rickandmortyapi.com/api/character/";
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const rickAndMortyCharacterId = props.id;

  useEffect(() => {
    fetch(`${url} ${rickAndMortyCharacterId}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setName(result.name);
        setImage(result.image);
        setGender(result.gender);
        setStatus(result.status);
      })
      .catch((error) => console.error("Error en el fetch:", error));
  }, [rickAndMortyCharacterId]);

  return (
    <div>
      <CharacterCard
        name={name}
        image={image}
        gender={gender}
        status={status}
      />
    </div>
  );
}

export default RickAndMortyCharacterCard;
