const myNumber= 42;

const myFloat = 42.01;

const mystring = "42";
const mysTring = "42.129OFDRTJ";

//Number methods
// convertir un nombre string en nombre
console.log(Number(42) === myNumber);

console.log(Number(true));

//Déterminer si un nombre est un entier
console.log(Number.isInteger(myNumber));

//Permet d'enlever dans une chaine de caractère tous les éléments qui ne sont pas des chiffres
console.log(Number.parseFloat(mysTring));


// Déterminer le nombre de chiffres après la virgule, arrondir 
console.log(Number.parseFloat(mysTring).toFixed(2));

//Convertir en nombre entier
console.log(Number.parseInt(mysTring));



