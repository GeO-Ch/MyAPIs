fetch("https://swapi-graphql.netlify.app/.netlify/functions/index?query={allFilms{films{title}}}")
.then(function(response) {
  if (response.status == 200){
    return response.json();
  }
})
.then(function(jsonResponceData) {
  console.log(jsonResponceData);
  printResponce(jsonResponceData)
})
.catch(function(error) {
  console.error('Error fetching data:', error);
});


function printResponce(jsonResponceData) {
  var list = document.getElementById("list");
  var ulElement = document.createElement("ul");
  var titles = jsonResponceData.data.allFilms.films;

  titles.forEach(function(eachTitle) {
    var liElement = document.createElement("li");
    liElement.textContent = eachTitle.title;

    ulElement.appendChild(liElement);
    
  });
  list.appendChild(ulElement);
}