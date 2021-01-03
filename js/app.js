"use strict";
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let branch = [{
    location: 'Seattle', minCust: 23, maxCust: 65, average: 6.3, totalCooliesPerHour: [],
    getRandominCusttInclusive: function () {
        let minCustCust = Math.ceil(this.minCust);
        let maxCustCust = Math.floor(this.maxCust);
        return Math.floor(Math.random() * (maxCustCust - minCustCust + 1) + minCustCust);
    }, totalCookies: function () {
        let ul = document.createElement('ul');
        let h3 = document.createElement('h3');
        h3.textContent = this.location;
        let total = 0;
        for (let i = 0; i < workingHours.length; i++) {
            let value = this.getRandominCusttInclusive() * this.average;
            total = total + value;
            this.totalCooliesPerHour.push(value);
            renderTheList(ul, value, workingHours[i])
        }
        let totalLi = document.createElement('li');
        totalLi.innerHTML = `Total: ${total}`
        let main = document.getElementById('main')
        main.appendChild(h3);
        main.appendChild(ul)
    }
}, {
    location: 'Tokyo', minCust: 3, maxCust: 24, average: 1.2, totalCooliesPerHour: [],
    getRandominCusttInclusive: function () {
        let minCust = Math.ceil(this.minCust);
        let maxCust = Math.floor(this.maxCust);
        return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
    }, totalCookies: function () {
        let ul = document.createElement('ul');
        let h3 = document.createElement('h3');
        let info = document.write("")
        h3.textContent = this.location;
        let total = 0;
        for (let i = 0; i < workingHours.length; i++) {
            let value = this.getRandominCusttInclusive() * this.average;
            total = total + value;
            this.totalCooliesPerHour.push(value);
            renderTheList(ul, value, workingHours[i])
        }
        let totalLi = document.createElement('li');
        totalLi.innerHTML = `Total: ${total}`
        let main = document.getElementById('main')
        main.appendChild(h3);
        main.appendChild(ul)
    }
}, {
    location: 'Dubai', minCust: 11, maxCust: 38, average: 3.7, totalCooliesPerHour: [],
    getRandominCusttInclusive: function () {
        let minCust = Math.ceil(this.minCust);
        let maxCust = Math.floor(this.maxCust);
        return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
    }, totalCookies: function () {
        let ul = document.createElement('ul');
        let h3 = document.createElement('h3');
        h3.textContent = this.location;
        let total = 0;
        for (let i = 0; i < workingHours.length; i++) {
            let value = this.getRandominCusttInclusive() * this.average;
            total = total + value;
            this.totalCooliesPerHour.push(value);
            renderTheList(ul, value, workingHours[i])
        }
        let totalLi = document.createElement('li');
        totalLi.innerHTML = `Total: ${total}`
        let main = document.getElementById('main')
        main.appendChild(h3);
        main.appendChild(ul)
    }
}, {
    location: 'Paris', minCust: 20, maxCust: 38, average: 2.3, cookiesAtHour: [],
    random: function () {
        let minCust = Math.ceil(this.minCust);
        let maxCust = Math.floor(this.maxCust);
        return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
    }, totalCookies: function () {
        let ul = document.createElement('ul');
        let h3 = document.createElement('h3');
        h3.textContent = this.location;
        let total = 0;
        for (let i = 0; i < workingHours.length; i++) {
            let value = this.random() * this.average;
            total = total + value;
            this.cookiesAtHour.push(value);
            renderTheList(ul, value, workingHours[i])
        }
        let totalLi = document.createElement('li');
        totalLi.innerHTML = `Total: ${total}`
        let main = document.getElementById('main')
        main.appendChild(h3);
        main.appendChild(ul)
    }
}, {
    location: 'Lima', minCust: 2, maxCust: 16, average: 4.6, totalCooliesPerHour: [],
    getRandominCusttInclusive: function () {
        let minCust = Math.ceil(this.minCust);
        let maxCust = Math.floor(this.maxCust);
        return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
    }, totalCookies: function () {
        let ul = document.createElement('ul');
        let h3 = document.createElement('h3');
        h3.textContent = this.location;
        let total = 0;
        for (let i = 0; i < workingHours.length; i++) {
            let value = this.getRandominCusttInclusive() * this.average;
            total = total + value;
            this.totalCooliesPerHour.push(value);
            renderTheList(ul, value, workingHours[i])
        }
        let totalLi = document.createElement('li');
        totalLi.innerHTML = `Total: ${total}`
        let main = document.getElementById('main')
        main.appendChild(h3);
        main.appendChild(ul)
    }
}]

function renderTheList(ul, value, time) {
    let li = document.createElement('li');
    li.innerText = `${time}: ${Math.round(value)} cookies`;
    ul.appendChild(li);
}
function echo() {
    let table = document.getElementById('table');
    let infoTabel = document.createElement('table')
    let thLocation = document.createElement('th');
    thLocation.innerHTML = 'city';
    infoTabel.appendChild(thLocation);
    let thminCust = document.createElement('th');
    thminCust.innerHTML = 'minimum';
    infoTabel.appendChild(thminCust);
    let thmaxCust = document.createElement('th');
    thmaxCust.innerHTML = 'maximum';
    infoTabel.appendChild(thmaxCust);
    let thAvg = document.createElement('th');
    thAvg.innerText = 'Avg';
    infoTabel.appendChild(thAvg);

    for (let i = 0; i < branch.length; i++) {
        branch[i].totalCookies();
        let row = document.createElement('tr')
        let location = document.createElement('td')
        location.innerHTML = branch[i].location;
        row.appendChild(location);
        let minCust = document.createElement('td');
        minCust.innerHTML = branch[i].minCust;
        row.appendChild(minCust);
        let maxCust = document.createElement('td');
        maxCust.innerHTML = branch[i].maxCust;
        row.appendChild(maxCust);
        let avg = document.createElement('td');
        avg.innerText = branch[i].average;
        row.appendChild(avg);
        infoTabel.appendChild(row);
    };
    table.appendChild(infoTabel)
}
echo();
