// Variable
const myVariable = "Mathematic";

// // The Length proprety
// console.log(myVariable.length );
// console.log("Every good boy does fine". length);


//String Methods pour trouver la lettre correspondant à l'indexe

console.log(myVariable.charAt(5));

//Pour trouver l'index ou commence une chaine de carractère
console.log(myVariable.indexOf('a'));

// Affiche le éléments compris dans les indice 
console.log(myVariable.slice(5, 8));
console.log(myVariable.slice(5));

//Met tous les carractère en majuscule
console.log(myVariable.toUpperCase());

//Met tous les carractère en miniscule
console.log(myVariable.toLowerCase());

// Pour voirr si un caractère ou chaine de caractère est compris dans une string
console.log(myVariable.includes("ma"));

//Divise le mot à partie de l'élément indiqué
console.log(myVariable.split("e"));
console.log("Every good boy does fine".split(" "));



console.log(myVariable);

