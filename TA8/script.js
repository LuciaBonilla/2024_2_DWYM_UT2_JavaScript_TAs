const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];

function findTheOldest() {
    let oldest = people[0];

    for (let i = 1; i < people.length; i++) {
        let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        let actualAge = people[i].yearOfDeath - people[i].yearOfBirth;
        if (actualAge > oldestAge) {
            oldest = people[i];
        }
    }
    return oldest.name;
}

function addPerson(name, yearOfBirth, yearOfDeath) {
    people.push({
        name: name,
        yearOfBirth: yearOfBirth,
        yearOfDeath: yearOfDeath
    });
}

// Elementos del HTML.
const inputPersonName = document.getElementById("input-personName");
const inputPersonYearOfBirth = document.getElementById("input-personYearOfBirth");
const inputPersonYearOfDeath = document.getElementById("input-personYearOfDeath");
const buttonAddPerson = document.getElementById("button-addPerson");
const buttonSearchOldestPerson = document.getElementById("button-searchOldestPerson");
const outputOldestPersonName = document.getElementById("output-oldestPersonName");

function showTheOldest() {
    outputOldestPersonName.textContent = findTheOldest();
}

buttonAddPerson.addEventListener("click", () =>
    addPerson(inputPersonName.value, parseInt(inputPersonYearOfBirth.value), parseInt(inputPersonYearOfDeath.value)));

buttonSearchOldestPerson.addEventListener("click", () =>
    showTheOldest());