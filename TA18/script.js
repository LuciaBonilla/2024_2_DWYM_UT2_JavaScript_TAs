// Objetivo: Filtrar elementos de una lista mientras se escribe en un input.

// -> VARIABLES GLOBALES
// Elementos del HTML.
const outputPeopleList = document.getElementById("output-peopleList");
const inputSearchPerson = document.getElementById("input-searchPerson");
// Lista de personas.
const people = [
    "John Doe",
    "Jane Smith",
    "Michael Johnson",
    "Emily Davis",
    "Jessica Wilson",
    "William Brown",
    "Olivia Martinez",
    "David Lee",
    "Sophia Harris",
    "James Clark",
    "Isabella Lewis",
    "Benjamin Walker",
    "Mia Allen",
    "Lucas Young",
    "Ava King",
    "Alexander Wright",
    "Amelia Scott",
    "Daniel Adams",
    "Ella Baker",
    "Henry Turner",
    "Chloe Gonzalez",
    "Matthew Nelson",
    "Grace Perez",
    "Jackson Moore",
    "Victoria Rivera"
];

// -> FUNCIONES
function renderPeopleList(people) {
    outputPeopleList.innerHTML = null;

    people.forEach(person => {
        const li = document.createElement("li");
        li.textContent = person;
        outputPeopleList.appendChild(li);
    });
}

// Renderiza la lista inicial.
renderPeopleList(people);

function filterPeopleList() {
    const searchText = inputSearchPerson.value.toLowerCase();

    const filteredPeople = people.filter(person =>
        person.toLowerCase().startsWith(searchText)
    );

    renderPeopleList(filteredPeople);
}

// -> EVENTOS
inputSearchPerson.addEventListener("input", () => filterPeopleList());