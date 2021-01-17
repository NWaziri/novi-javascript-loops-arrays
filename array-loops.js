// --------------------------
// Opdracht 1
// --------------------------

const names = ["Henk", "Piet", "Fred", "Joop"];

// Verander de waardes van de array dusdanig dat er -"je" achter iedere naam wordt geplakt
// Wanneer je de volledige array logt zie je alle nieuwe waardes
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]
const add_je = (array) => {
    let new_array = []
    let new_name;

    for(let i=0; i < array.length; i++) {
        new_name = array[i] + "je"
        new_array.push(new_name)
    }

    return new_array
}

console.log(add_je(names))

// --------------------------
// Opdracht 2
// --------------------------

const numbers = [2, 4, 5, 29, 38];

// Verander de waardes van de array dusdanig dat iedere waarde met 3 vermenigvuldigd wordt
// Wanneer je de volledige array logt zie je alle nieuwe waardes
// console.log(numbers) geeft: [ 6, 12, 15, 87, 114 ];

const multiply = (muliplier, array) => {
    let new_array = []
    let new_element;

    for (let i=0; i < array.length; i++) {
        new_element = array[i] * muliplier
        new_array.push(new_element)
    }

    return new_array
}

console.log(multiply(3, numbers))

// --------------------------
// Opdracht 3
// --------------------------

const figures = [4, 6, 12, 34, 1];

// Verander de waardes van de array dusdanig dat er 3 bij iedere waarde wordt opgetelt
// Wanneer je de volledige array logt zie je alle nieuwe waardes
// console.log(figures) geeft: [ 7, 9, 15, 37, 4 ]

const add_number = (numberToAdd, array) => {
    let new_array = []
    let new_number;

    for (let i=0; i < array.length; i++) {
        new_number = array[i] + numberToAdd
        new_array.push(new_number) 
    }

    return new_array
}

console.log(add_number(3, figures))

