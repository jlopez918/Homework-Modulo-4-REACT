import React, { useState, useEffect } from "react";
import CharacterCard from "../characterCard/CharacterCard";

function RickAndMortyCharacterCard(props) {
  const url = "https://rickandmortyapi.com/api/character/";
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`${url}?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCharacterList(data.results);
      })
      .catch((error) => console.error("Error en el fetch:", error));
  }, [page]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1); // Aumenta el número de página
  };

  // Función para manejar el botón de página anterior
  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1); // Disminuye el número de página
    }
  };

  return (
    <div>
      <div className="cardbox">
        {characterList.map((characters) => (
          <CharacterCard
            name={characters.name}
            image={characters.image}
            gender={characters.gender}
            status={characters.status}
          />
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={page === 1}>
          Anterior
        </button>
        <span>Página {page}</span>
        <button onClick={handleNextPage}>Siguiente</button>
      </div>
    </div>
  );
}

export default RickAndMortyCharacterCard;
