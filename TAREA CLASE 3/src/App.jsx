import React from "react";
import Title from "./components/titulo/titleComponent";
import Image from "./components/imagen/imageComponent";
import Details from "./components/details/detailsComponent";
import Image2 from "./components/imagen/image2Component";
import Image3 from "./components/imagen/image3Component";
import "./App.css";

function App() {
  return (
    <div>
      <div className="card">
        <div className="wrapper">
          <Image url="./rickcharacter.jpg" />
        </div>
        <Image2 url="./RickMortyTitle.png" />
        <Image3 url="./rickCover.jpg" />
      </div>
      <div className="text-container">
        <div className="title">
          <Title title="Rick" />
        </div>

        <div className="detail">
          <Details genre="Human" status="Alive" />
        </div>
      </div>
    </div>
  );
}

export default App;
