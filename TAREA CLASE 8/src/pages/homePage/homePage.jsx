import React from "react";
import { Link } from "react-router-dom";
import SearchCharacter from "../../components/search/searchCharacter";

// TODO: agrega estilos un diseño personalizado a la página
function HomePage(props) {
  return (
    <div className="homecontent">
      <h1> Bienvenido a la pagina de Rick and Morty</h1>
      <SearchCharacter />
      <h3> Enlaces rapidos </h3>

      <Link to="/characters">Ir a personajes</Link>
      <Link to="/episodes">Ir a episodios</Link>
    </div>
  );
}
export default HomePage;
