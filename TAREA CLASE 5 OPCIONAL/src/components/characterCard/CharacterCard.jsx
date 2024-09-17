import React from "react";
import Title from "../Titulo/title";
import Image from "../Imagen/image";
import Details from "../Details/details";

function CharacterCard(props) {
  return (
    <div className="a-box">
      <div className="img-container">
        <div className="img-inner">
          <div className="inner-skew">
            <Image url={props.image} />
          </div>
        </div>
      </div>
      <div className="text-container">
        <div className="title">
          <Title title={props.name} />
        </div>
        <div className="detail">
          <Details gender={props.gender} status={props.status} />
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
