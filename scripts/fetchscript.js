fetch('https://hplussport.com/api/products')
.then(function(response) {
  if (response.status == 200){
    return response.json();
  }
})
.then(function(jsonResponceData) {
  populateTable(jsonResponceData);
})
.catch(function(error) {
  console.error('Error fetching data:', error);
});

function populateTable(data) {
  	var dataTable = document.getElementById('dataTable');
	  var fields = Object.keys(data[0]);
	  var headerRow = dataTable.insertRow();

  fields.forEach(function(field) {
	var headerCell = headerRow.insertCell();
    headerCell.classList.add("p-4");
    headerCell.classList.add("text-center");
    headerCell.classList.add("border-gray-300");
    headerCell.classList.add("border-b"); //separated to avoid error invalid token
    headerCell.textContent = field;
  });

  data.forEach(function(product) {
    var row = dataTable.insertRow();

    fields.forEach(function(field) {
      var cell = row.insertCell();
      cell.classList.add("p-4");
      cell.classList.add("text-center");
      cell.classList.add("border-gray-300");
      cell.classList.add("border-b"); //separated to avoid error invalid token 
      
      if (product[field].endsWith(".png") || product[field].endsWith(".jpg")) {
          
        var imgElement = document.createElement("img");
        imgElement.classList.add("w-64");
        imgElement.classList.add("h-32"); //separated to avoid error invalid token 
        
        imgElement.src = product[field];
      
        
        cell.appendChild(imgElement);
      } else {
        
        cell.textContent = product[field];
      }
    });
  });
}
