var XHRequest = new XMLHttpRequest();

XHRequest.open('GET', 'https://hplussport.com/api/products');

XHRequest.send();  

   XHRequest.onload = function() {
	try {
		var response = XHRequest.response;
		var parsedData = JSON.parse(response);

		var table = document.getElementById("dataTable");

		var headerRow = table.insertRow(0);

		Object.keys(parsedData[0]).forEach(function(key) {
			var headerCell = headerRow.insertCell();
			headerCell.classList.add("p-4");
			headerCell.classList.add("text-center");
			headerCell.classList.add("border-gray-300");
			headerCell.classList.add("border-b"); //separated to avoid error invalid token 
			headerCell.textContent = key;
		});

		parsedData.forEach(function(dataObj) {
			var row = table.insertRow();
			row.classList.add("p-4");
			row.classList.add("text-center");
			row.classList.add("border-gray-300");
			row.classList.add("border-b"); //separated to avoid error invalid token 

			Object.values(dataObj).forEach(function(value) {
				var cell = row.insertCell();

				if (value.endsWith(".png") || value.endsWith(".jpg")) {
          
					var imgElement = document.createElement("img");
					imgElement.classList.add("w-64");
					imgElement.classList.add("h-32"); //separated to avoid error invalid token 
					
					imgElement.src = value;
				  
					
					cell.appendChild(imgElement);
				} else {
					
					cell.textContent = value;
				}
			});
		});

	} catch (error) {
		console.error("Error parsing JSON:", error);
	}
}