//Added function to initialize the script.
function initialize() {
	cities();
};

/*Added a function which will properly plug in the array for its use. Put all
of the functions under one function to create the table.
*/
function cities() {
	var cityPop = [
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];
	/*Creates the table and its elements so the array can be organized and shown
	when the index is initialized.
	*/
	var table = document.createElement("table");
	//
	var headerRow = table.insertRow();

	//Creates the header for the city column.
	var cityHeader = document.createElement("th");
	cityHeader.innerHTML = "City";
	headerRow.appendChild(cityHeader);

	//Creates the header for the population column.
	var popHeader = document.createElement("th");
	popHeader.innerHTML = "Population";
	headerRow.appendChild(popHeader);

	//Populate the table with city data rows.
	cityPop.forEach(function (cityData) {
		var row = table.insertRow();
		var cityNameCell = row.insertCell();
		cityNameCell.innerHTML = cityData.city;
		var cityPopCell = row.insertCell();
		cityPopCell.innerHTML = cityData.population;
	});

	//Put in this statement to print this within the index.
	var mydiv = document.getElementById("mydiv");
	mydiv.appendChild(table);

	//Called the functions so they can be populate the third column.
	addColumns(cityPop);
	//Registered the event listener for the background color.
	addEvents();
};

//Reorganized this so the function can be called.
function addColumns(cityPopData) {
	document.querySelectorAll('tr').forEach(function (row, i) {
		console.log(i);
		if (i === 0) {
			row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
		} else {
			var citySize;
			//cityPopData is 0-indexed, but our loop starts from i=1 (after header), so use i-1
			if (cityPopData[i - 1].population < 100000) {
				citySize = 'Small';
			} else if (cityPopData[i - 1].population < 500000) {
				citySize = 'Medium';
			} else {
				citySize = 'Large';
			}
			// Add the new cell with city size data
			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
		};
	});
};
//Reorganized this so this function cal also be called.
function addEvents() {
	/*Adjusted the function to work effectively. Swapped location of the function and
	"mouseover" while also moving the parenthesis in the right place. Also swapped
	"mouseover" with the declared variable 'color' since "mouseover" was not in this 
	script.
	*/
	document.querySelector('table').addEventListener('mouseover', function () {
		var randomColor = 'rgb(';
		for (var i = 0; i < 3; i++) {
			var randomNum = Math.round(Math.random() * 255);
			randomColor += randomNum;
			if (i < 2) {
				randomColor += ',';
			}
		}
		randomColor += ')';
		// Change the background color of the table.
		document.querySelector('table').style.backgroundColor = randomColor;
	});
	function clickme() {

		alert('Hey, you clicked me!');
	};
	
	//Registered the event listener for clicks.
	document.querySelector("table").addEventListener("click", clickme)
};

//Added window onload statement to make the array run on the website.
window.onload = initialize();