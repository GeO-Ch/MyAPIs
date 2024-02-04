import {depopulateGrid} from './depopulateGrid.js';
import {clickHandler} from './clickHandler.js';

document.addEventListener("click", function (event) {
  let clickhandlerResponce = clickHandler(event);
    
    if (clickhandlerResponce !== undefined) {
      filteredGifs(clickhandlerResponce);
    }
});

function filteredGifs(clickhandlerResponce){
  const apiKey = "api_key=mykey"; //must be handled on the server side not on client to be private!
  
  fetch(`https://api.giphy.com/v1/gifs/search?${apiKey}&${clickhandlerResponce.searchFor}&${clickhandlerResponce.limit}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
  .then(function(response) {
    if (response.status == 200){
      return response.json();
    }
  })
  .then(function(jsonResponceData) {
    showGifs(jsonResponceData);
  })
  .catch(function(error) {
    console.error('Error fetching data:', error);
  });
  
  function showGifs(jsonData) {
    depopulateGrid();
    
    jsonData.data.forEach(function(data) {
      var urlGif = data.images.original.url;
  
      var divElement = document.createElement("div");
      divElement.classList.add("col-span-1");
      gifShowGrid.appendChild(divElement);
  
      var imgElement = document.createElement("img");
      imgElement.classList.add("w-96");
      imgElement.classList.add("h-64");
      imgElement.src = urlGif;
      divElement.appendChild(imgElement);
    });
  }
}

