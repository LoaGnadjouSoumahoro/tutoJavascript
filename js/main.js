// Decomposition d'objet
//l'opérateur de décomposition le spray operator (...)


const nombres = [25, 12, 8];

function addition(nb1, nb2, nb3){
    return nb1 + nb2 + nb3;
}

let resultat = addition(nombres[0], nombres[1], nombres[2]);

console.log(resultat);

//Utilisation de l'Opératuer de décomposition 

let resultat2 = addition(...nombres);
console.log(resultat2);
console.log(...nombres);

//la date
let maDate = new Date();
console.log(maDate);

let maDate2 = new Date(2023, 10, 25);

console.log(maDate2);


//Pour afficher insérer un tableau dans un autre

const tableauNoumbres = [48, 74, ...nombres, 26];
//console.table affiche un tableau
console.table(tableauNoumbres);


//Opérateur de décompasition sur les OBJETS

const nom = {
nom: "Gambier"
}
const prenom = {
prenom: "Benoit"
}

const profil = { ...nom, ...prenom};

console.log(profil);


// Exemple pour les OBJET

const defaultPerson = {
    firstname: "UNDEFINED",
    lastname: "UNDEFINED",
    age: 18
}

const user= {
...defaultPerson
}

console.log(user);

const user2= {
...defaultPerson,
firstname: 'John',
age:16

}

console.log(user2);
