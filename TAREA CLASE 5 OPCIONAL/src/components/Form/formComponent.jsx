import React, { useState } from "react";

const FormComponent = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" && password === "") {
      setError(true);
    } else {
      setError(false);
      props.setUser([name]);
    }
  };
  return (
    <div id="form">
      <h1>Login</h1>
      <form className="form" onSubmit={handleSubmit} action="">
        <p>Nombre</p>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            console.log(e.target.value, "valor input");
          }}
        />
        {error && <p className="error">El campo es requerido</p>}
        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">El campo es requerido</p>}
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default FormComponent;
