let n = prompt ('De quel nombre veux-tu calculer la factorielle ?');

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
  }

  let res = factorial(n);
console.log(`Le resultat est : ${res}`);