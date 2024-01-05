// Declaration de fonction
//le fonction déclaré peut être appellé avant qu'elle soit créé

direBonjour("Samba");

function direBonjour(prenom) {
console.log('Bonjour ' + prenom);
}




//Expression de fonction

let dirAurevoir = function(){
console.log("Aurevoir")
}

dirAurevoir();





//Les fonctions Fléché 1

let direAurevoir = () => {
 console.log("Aurevoir à tous");
}

direAurevoir();


//Les fonctions Fléché 2

let direAurevoir1 = (prenom) => {
    return `Aurevoir ${prenom}`;
   }
   
   console.log(direAurevoir1("Samba"));


//Les fonctions Fléché 3

let direAurevoir2 = (prenom) =>  'Aurevoir ' + prenom;
   
   console.log(direAurevoir2("Mamadi"));



//    Exo somme

let somme = (a, b) => a+b;


console.log(somme(4,5));



//Amelioration de la fonction fléche 
//Si on a un seul paramettre, pas nécessaire d'ajouter les parenthèses
let direAurevoir3 = prenom =>  'Aurevoir ' + prenom;
   
   console.log(direAurevoir3("Leuk"));



   //Exo pour afficher les nombres plus grand que 10
   const prices = [4, 8, 9, 15, 24, 3, 8, 14];

   let plusGrandQue10 = prices.filter(function(p){
return p > 10
});
console.log(plusGrandQue10);


//Utilisation de la fonction fléché pour la résolution de l'exercice plus grand que 10

let plusGrandQue10_1 = prices.filter(p => p > 10);

console.log(plusGrandQue10_1);




// Fonction fléché avec les objets

const utilisateur = {
    prenom: 'Nicolas',
    age: 50,
    presentation: function() {
        return `Bonjour, je  m'appelle ${prenom} j'ai ${age} ans.`;
    }
}

console.log(utilisateur);
console.log(utilisateur.presentation);


const utilisateur2 = {
    prenom: 'Lassina',
    age: 35,
    presentation2: () =>
        `Bonjour, je  m'appelle ${prenom} j'ai ${age} ans.`
    
}

console.log(utilisateur2);
console.log(utilisateur2.presentation2);