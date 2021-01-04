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
store.prototype.finalTotalStore = function () {
    for (var s = resetVal; s < this.totalPH.length; s++) {
        this.storeTotal = this.storeTotal + this.totalPH[s];
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




let finalStore = [];
let totalCell = [];
let TPH = document.createElement("tr");
TPH.textContent = "TOTAL";
gitTabel.appendChild(TPH);
for (var i = resetVal; i < workingHours.length; i++) {
    for (var x = resetVal; x < workingHours.length; x++) {
        finalStore[x] = seattle.totalPH[x] + dubai.totalPH[x] + seattle.totalPH[x] + paris.totalPH[x] + lima.totalPH[x]
    }
    totalCell[i] = document.createElement('td');
    totalCell[i].textContent = finalStore[i];
    TPH.appendChild(totalCell[i])

}




var finalTotal = resetVal;
for (i = resetVal; i < workingHours.length; i++) {
    finalTotal += finalStore[i];
}
let lastEntry = document.createElement("td");
lastEntry.textContent = finalTotal;
TPH.appendChild(lastEntry);