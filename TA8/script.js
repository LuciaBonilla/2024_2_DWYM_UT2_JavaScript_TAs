// -> VARIABLES GLOBALES
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
// Elementos del HTML.
const inputPersonName = document.getElementById("input-personName");
const inputPersonYearOfBirth = document.getElementById("input-personYearOfBirth");
const inputPersonYearOfDeath = document.getElementById("input-personYearOfDeath");
const buttonAddPerson = document.getElementById("button-addPerson");
const outputOldestPersonName = document.getElementById("output-oldestPersonName");

// -> FUNCIONES
function findTheOldest(people) {
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

showTheOldest();

function showTheOldest() {
    outputOldestPersonName.textContent = findTheOldest(people);
}

// -> EVENTOS
buttonAddPerson.addEventListener("click", function () {
    addPerson(inputPersonName.value, parseInt(inputPersonYearOfBirth.value), parseInt(inputPersonYearOfDeath.value));
    showTheOldest();
});