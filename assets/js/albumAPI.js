const API = "https://rickandmortyapi.com/api/character";

const getData = (api) => {
  return fetch(api)
    .then((Response) => Response.json())
    .then((json) => {
      fillData(json);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

const fillData = (data) => {
  let html = "";
  data.results.forEach((element) => {
    html += '<div class="col">';
    html += '<div class="card h-100" style="with: 12rem;">';
    html += `<img src="${element.image}" class="card-img-top" alt="${element.name}">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${element.name}</h5>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";
  })
  document.getElementById("dataAlbum").innerHTML = html;
};

getData(API);
