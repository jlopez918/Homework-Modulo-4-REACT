import React from "react";
import EpisodeTitle from "../title/episodeTitle";
import Episode from "../episode/episode";
import AirDate from "../airDate/airDate";

function EpisodeCard(props) {
  return (
    <div className="episodesContainer">
      <div className="episodetitle">
        <p>
          <EpisodeTitle eptitle={props.name} />
        </p>
      </div>
      <div className="episode">
        <p>
          <Episode episode={props.episode} />
        </p>
      </div>
      <p className="date">
        <AirDate date={props.date} />
      </p>
    </div>
  );
}

export default EpisodeCard;
