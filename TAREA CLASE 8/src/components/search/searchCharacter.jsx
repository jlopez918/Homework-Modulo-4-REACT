import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CharacterCard from "../characterCard/CharacterCard"; // Importa tu componente de tarjeta

const SearchCharacter = () => {
  const [query, setQuery] = useState(""); // Valor del input de búsqueda
  const [status, setStatus] = useState(""); // Filtro de estado
  const [charactersList, setCharactersList] = useState([]); // Lista de personajes
  const [species, setSpecies] = useState(""); // Filtro de especie
  const [currentPage, setCurrentPage] = useState(1); // Control de la página actual

  const navigate = useNavigate();
  const location = useLocation();

  // Función que actualiza la URL y lanza la búsqueda
  const onSearch = (e) => {
    e.preventDefault();
    navigate(
      `/?character=${query}&status=${status}&species=${species}&page=${currentPage}`
    );
  };

  // Extraer parámetros de la URL para filtrar los resultados
  const queryParams = new URLSearchParams(location.search);
  const characterName = queryParams.get("character") || "";
  const characterStatus = queryParams.get("status") || "";
  const characterSpecies = queryParams.get("species") || "";
  const page = queryParams.get("page") || 1;

  // Llamada a la API para obtener los personajes filtrados
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        let apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;

        if (characterName) apiUrl += `&name=${characterName}`;
        if (characterStatus) apiUrl += `&status=${characterStatus}`;
        if (characterSpecies) apiUrl += `&species=${characterSpecies}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.results) {
          setCharactersList(data.results);
        } else {
          setCharactersList([]);
        }
      } catch (error) {
        console.error("Error al buscar personajes:", error);
      }
    };

    fetchCharacters();
  }, [location.search, page]);

  // Manejo de paginación
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="search-container">
      <h1 className="search-title">Buscar Personajes de Rick and Morty</h1>

      {/* Formulario de filtros */}
      <form className="search-form" onSubmit={onSearch}>
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Todos</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        <select value={species} onChange={(e) => setSpecies(e.target.value)}>
          <option value="">Todas las especies</option>
          <option value="human">Human</option>
          <option value="alien">Alien</option>
        </select>

        <button type="submit">Buscar</button>
      </form>

      {/* Renderizado de la lista de personajes */}
      <div className="characters-grid">
        {charactersList.length > 0 ? (
          charactersList.map((character) => (
            <CharacterCard
              key={character.id}
              name={character.name}
              image={character.image}
              gender={character.gender}
              status={character.status}
            />
          ))
        ) : (
          <p>No se encontraron personajes</p>
        )}
      </div>

      {/* Paginación */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>Pagina {currentPage}</span>
        <button onClick={nextPage}>Siguiente</button>
      </div>
    </div>
  );
};

export default SearchCharacter;
