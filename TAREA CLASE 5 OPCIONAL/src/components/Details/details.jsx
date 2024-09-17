import React from "react";

function Details(props) {
  return (
    <div>
      <p>
        <b>Gender:</b> {props.gender}
      </p>
      <p>
        <b>Status:</b> {props.status}
      </p>
    </div>
  );
}

export default Details;
