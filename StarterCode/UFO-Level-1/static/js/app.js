// from data.js
var tableData = data;

var table = d3.select("tbody");
// YOUR CODE HERE!
tableData.forEach(function(time) {
    var tr = d3.select("tbody").append("tr");
    tr.append("td").text(time.datetime);
    tr.append("td").text(time.city);
    tr.append("td").text(time.state);
    tr.append("td").text(time.country);
    tr.append("td").text(time.shape);
    tr.append("td").text(time.durationMinutes);
    tr.append("td").text(time.comments);
});

// Use D3 to select the Date Time input field and the Filter button
var inputField = d3.select("#datetime");
var inputField1 = d3.select("#city");
var inputField2 = d3.select("#state");
var inputField3 = d3.select("#country");
var inputField4 = d3.select("#shape");
var button = d3.select("#filter-btn");
// On click of the button, call filterTable function
button.on("click", filterTable);
function filterTable() {
    // Clear Table Area
    table.html("");
    // Read in the value from the inputField
    filterDate = inputField.property("value");
    filterCity = inputField1.property("value");
    filterState = inputField2.property("value");
    filterCountry = inputField3.property("value");
    filterShape = inputField4.property("value");
    //Print filter date to console log
    console.log(filterDate);
    console.log(filterCity);
    console.log(filterState);
    // if filterData input field is not blank, filter the original table to include
    // only sightings with dates that match the entered date.
    if(filterDate){
        filteredData = tableData.filter(sighting => sighting.datetime === filterDate)
    }
    else if(filterCity){
        filteredData = tableData.filter(sighting => sighting.city === filterCity)
    }
    else if(filterState){
        filteredData = tableData.filter(sighting => sighting.state === filterState)
    }
    else if(filterShape){
        filteredData = tableData.filter(sighting => sighting.shape === filterShape)
    }
    else if(filterCountry){
        filteredData = tableData.filter(sighting => sighting.country === filterCountry)
    }
    else {
        filteredData = tableData;
    }
    // Populate tbody with the filtered data
    filteredData.forEach(function(time) {
        var tr = d3.select("tbody").append("tr");
        tr.append("td").text(time.datetime);
        tr.append("td").text(time.city);
        tr.append("td").text(time.state);
        tr.append("td").text(time.country);
        tr.append("td").text(time.shape);
        tr.append("td").text(time.durationMinutes);
        tr.append("td").text(time.comments);
    });
}
