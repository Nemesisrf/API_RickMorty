const API = "https://jsonplaceholder.typicode.com/users";
const btnSearch = document.getElementById("btnSearch");

//Obtener los resultados de la API
//consumir API -
const getData = (api) => {
  //fetch es ese request - es decir que GET (trae la informacion de la API)
  //parametro (api) tiene la url, "https://jsonplaceholder.typicode.com/users"
  //y esa URL tiene el array con los 10 JSON como tal la URL trae JSON
  //return para que retome lo que me respondio la peticion
  //pedir (get) (get trae lo de la url) y responde.
  return (
    fetch(api)
      //promesas
      //nos promete traernos lo que tenga si o si la API
      //si sale bien
      //la promsea responde algo (response)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);

        fillData(json);
      })
      .catch((error) => {
        console.log("Error in the API", error);
      })
  );
};

const fillData = (data) => {
  //crear codigo html dentro de js
  let html = "";
  data.forEach((pp) => {
    html += '<div class="col">';
    html += '<div class="card h-100" style="with: 12rem;>';
    html += `<h2 class="card-title">${pp.name}</h2>`;
    html += '<div class="card-body">'
    html += `<h5 class="card-title">${pp.address.suite}</h5>`;
    html += `<h5 class="card-title">${pp.email}</h5>`;
    html += `<p class="card-title">Episodes: ${pp.phone}</p>`;
    html += `<p class="card-title"> <a href="${pp.website}" target=_black">Web personal</a><p>`;

    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("dataPeople").innerHTML = html
};

btnSearch.onclick = function () {
  //Un parametro recibe un valor  - variables
  getData(API);
};
