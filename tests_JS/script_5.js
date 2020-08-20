const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

var res0 = "Yes all rented";
var res1 = [];
var res2 = [];
var res4 = [];
var res5 = [];

for (var i = 0; i < books.length; i++) {

    if (books[i].rented === 0) {
        res0 = "Not all rented";
    }
    res1.push(books[i].rented);
    if (books[i].id === 873495) {
        res2 = books[i].title;
    }
    if (books[i].id === 133712) {
        delete books[i];
        i++;
    }
    res4.push(books[i]);
    res5.push(books[i].title);
}
var max = Math.max(...res1);
var min = Math.min(...res1);


for (var i = 0; i < books.length; i++) {
    if (books[i].rented === max) {
        console.log("bite");
    }
}
console.log(res1);




console.log("######## rented? ########");
console.log(res0);
console.log("######## More rented ########");
console.log(max);
console.log("######## Less rented ########");
console.log(min);
console.log("######## ID book ########");
console.log(res2);
console.log("######## Delete ########");
console.log(res4);
console.log("######## Tri Alpha ########");
console.log(res5.sort());