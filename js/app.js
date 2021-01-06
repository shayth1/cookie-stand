'use strict'
//var tHours = 14;
var resetVal = 0;
var workingHours = ['6:00AM', '7:00AM ', '8:00AM ', '9:00AM ', '10:00AM ', '11:00AM ', '12:00PM ', '1:00PM ', '2:00PM ', '3:00PM ', '4:00PM ', '5:00PM ', '6:00PM ', '7:00PM '];
var seattle = new store("Seattle", 23, 65, 6.3);
var tokyo = new store("Tokyo", 3, 24, 1.2);
var dubai = new store("Dubai", 11, 28, 3.7);
var paris = new store("Paris", 20, 38, 2.3);
var lima = new store("Lima", 2, 16, 4.6);


function store(location, min, max, avgCust,) {
    this.location = location;
    this.minCust = min;
    this.maxCust = max;
    this.avg = avgCust;
    this.custNum = [];
    this.storeTotal = 0;
    this.totalPH = [];

}

store.prototype.customer = function (min, max) {
    for (var s = resetVal; s < workingHours.length; s++) {
        this.custNum[s] = Math.floor(Math.random() * (max - min + 1)) + min;
    }

}
store.prototype.salesHour = function () {
    for (var i = resetVal; i < workingHours.length; i++) {
        this.totalPH[i] = Math.floor(this.custNum[i] * this.avg);
    }
}

//git final total for each store
store.prototype.finalTotalStore = function () {
    for (var s = resetVal; s < this.totalPH.length; s++) {

        this.storeTotal = this.totalPH[0] + this.totalPH[1] + this.totalPH[2] + this.totalPH[3] + this.totalPH[4] + this.totalPH[5] + this.totalPH[6]
            + this.totalPH[7] + this.totalPH[8] + this.totalPH[9] + this.totalPH[10] + this.totalPH[11] + this.totalPH[12] + this.totalPH[13];
    }
}




seattle.customer(seattle.minCust, seattle.maxCust);
seattle.salesHour();
seattle.finalTotalStore();

tokyo.customer(tokyo.minCust, tokyo.maxCust);
tokyo.salesHour();
tokyo.finalTotalStore();

dubai.customer(dubai.minCust, dubai.maxCust);
dubai.salesHour();
dubai.finalTotalStore();

paris.customer(paris.minCust, paris.maxCust);
paris.salesHour();
paris.finalTotalStore();

lima.customer(lima.minCust, lima.maxCust);
lima.salesHour();
lima.finalTotalStore();



let selectDiv = document.getElementById("push");
let gitTabel = document.createElement("table");
selectDiv.appendChild(gitTabel);
let headerRow = document.createElement("tr");
gitTabel.appendChild(headerRow);



let hoursRow = document.createElement("th");
hoursRow.textContent = "";
headerRow.appendChild(hoursRow);
for (var t = resetVal; t < workingHours.length + 1; t++) {
    var tabelCell = [];
    tabelCell[t] = document.createElement("th");
    tabelCell[t].textContent = workingHours[t];
    headerRow.appendChild(tabelCell[t])

}



let storeName = [seattle, tokyo, dubai, paris, lima];
let cells = [];
let storeTotal = [];
for (var x = resetVal; x < storeName.length; x++) {
    cells[x] = document.createElement("tr");
    cells[x].textContent = storeName[x].location
    gitTabel.appendChild(cells[x]);
    for (var i = resetVal; i < workingHours.length; i++) {
        var rowBox = [];
        rowBox[i] = document.createElement("td");
        rowBox[i].textContent = storeName[x].totalPH[i];
        cells[x].appendChild(rowBox[i]);

    }
    storeTotal[x] = document.createElement("td");
    storeTotal[x].textContent = storeName[x].storeTotal;
    cells[x].appendChild(storeTotal[x]);
}

// lab09
var newStore = document.getElementById('addStore');

function daynamic(newadd) {
    newadd.customer(newadd.minCust, newadd.maxCust); // do the rest of math
    newadd.salesHour();
    newadd.finalTotalStore();
}


addStore.addEventListener('submit', function (event) {

    event.preventDefault();
    //get vals
    var city = event.target.storeLocation.value;
    var minimum = event.target.storeMin.value;
    var maximum = event.target.storeMax.value;
    var sAvg = event.target.storeAvg.value;

    var newadd = new store(city, minimum, maximum, sAvg) //assign as a new store
    daynamic(newadd);
    console.log(newadd);
    // print it out
    let shayth = [newadd];
    let cells = [];
    let storeTotal = [];
    for (var x = resetVal; x < shayth.length; x++) {
        cells[x] = document.createElement("tr");
        cells[x].textContent = shayth[x].location
        gitTabel.appendChild(cells[x]);
        for (var i = resetVal; i < workingHours.length; i++) {
            var rowBox = [];
            rowBox[i] = document.createElement("td");
            rowBox[i].textContent = shayth[x].totalPH[i];
            cells[x].appendChild(rowBox[i]);

        }
        storeTotal[x] = document.createElement("td");
        storeTotal[x].textContent = shayth[x].storeTotal;
        cells[x].appendChild(storeTotal[x]);
    }


});
