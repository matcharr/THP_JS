console.log("#####################");
console.log("Bonjour monde");

console.log("#####################");

let name= "";
let letter;

while (!name) {
    letter = prompt('Tape ton prenom:');
    if (letter) {
        name += letter;
        console.log(`Bonjour, ${name}`); //on rajoute la lettre saisie à la suite du mot
    } else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
        name = "";
        break; // On quitte la boucle
    }
}

console.log("#####################");