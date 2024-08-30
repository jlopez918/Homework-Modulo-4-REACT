const url = "https://randomuser.me/api/";
const boton = document.getElementById("boton");
const carta = document.querySelector("#carta");

function mostrarData() {
  console.log("entro a la funcion");
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "dataaa <----");
      console.log(data.results[0], "ruta data");
      carta.innerHTML = `<img src='${data.results[0].picture.large}'>
                                <p>${data.results[0].name.first} ${data.results[0].name.last}</p>
                                <p>${data.results[0].cell}</p>
                                <p>${data.results[0].email}</p>
                                <p>${data.results[0].gender}</p>`;
    });
}

boton.addEventListener("click", mostrarData);
