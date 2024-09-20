import React, { useState, useEffect } from "react";
import EpisodeCard from "../episodesPage/episodesPageComponents/episodeCard/episodeCard";

function EpisodesPage(props) {
  const url = "https://rickandmortyapi.com/api/episode";
  const [episodeList, setEpisodeList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`${url}?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEpisodeList(data.results);
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
      <div className="episodebox">
        {episodeList.map((episodes) => (
          <EpisodeCard
            name={episodes.name}
            episode={episodes.episode}
            date={episodes.air_date}
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

export default EpisodesPage;
