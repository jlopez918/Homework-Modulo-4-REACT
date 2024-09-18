import React from "react";

const HomeComponent = (props) => {
  const handleLogOut = () => {
    props.setUser(null);
  };

  return (
    <div>
      <h1>Bienvenido a Home</h1>
      <p>Nombre Usuario</p>
      <h2>{props.user}</h2>
      <button onClick={handleLogOut}>Salir</button>
    </div>
  );
};

export default HomeComponent;
