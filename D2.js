/* ESERCIZIO 1
  Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

{
  let num1 = 8;
let num2 = 6; 

let largeNum = num1 > num2 ? `${num1} è maggiore di ${num2}`: `${num2} è maggiore di ${num1}`;
console.log(largeNum);

if(num1 > num2) {
  console.log(`${num1} è maggiore di ${num2}`);
} else {
  console.log(`${num2} è maggiore di ${num1}`);
}; 
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

{
  let num3 = 6;
let equal = num3 === 5 ? "Equal" : "Non equal";

console.log(equal);
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

{
  let num5 = 10;

if (num5 % 5 === 0){
  console.log(`Il numero ${num5} è divisibile per 5`);
} else{
  console.log(`Il numero ${num5} non è divisibile per 5`);
};
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

{let num6 = 3;
let num7 = 8;

if(num6 === 8){
  console.log(`Num6 è uguale a 8`);
} else if(num7 === 8){
  console.log(`Num7 è uguale a 8`);
} else if(num6 + num7 === 8){
  console.log(`La somma tra ${num6} + ${num7} è uguale a 8`);
} else if(num6 - num7 === 8){
  console.log(`La differenza tra ${num6} - ${num7} è uguale a 8`);
} else if(num7 - num6 === 8){
  console.log(`La differenza tra ${num7} - ${num6} è uguale a 8`);
} else {
console.log("Nessun numero è uguale a 8 o da come risulta di somma o sottrazione 8");
};
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

{
let totalShoppingCart = 21;
let shoppingFees = 10;
let totalShopping;

if(totalShoppingCart > 50){
  totalShopping = totalShoppingCart;
  console.log(`Congratilazion! Hai ottenuto la spedizione gratis! Il tuo totale carrello è: ${totalShopping}`);
} else { totalShopping = totalShoppingCart + shoppingFees;
  console.log(`Il tuo totale carrello è: ${totalShopping}`);
};
}

/* ESERCIZIO 6 
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
{
let totalShoppingCart = 95;
let shoppingFees = 10;
const discount = 20;
let discountShopping = (totalShoppingCart * discount) / 100; 
let discountShoppingTotal = totalShoppingCart - discountShopping ;
let totalShopping;

if(discountShoppingTotal > 50){
  totalShopping = discountShoppingTotal ;
  console.log(`Congratilazion! Hai ottenuto la spedizione gratis! Il tuo totale carrello è: ${discountShoppingTotal}`);
} else { totalShopping = discountShoppingTotal + shoppingFees;
  console.log(`Il tuo totale carrello è: ${totalShopping}`);
};
}

/* ESERCIZIO 7 -----
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
{
let num8 = 0;
let num9 = 7;
let num10 = 6;

if(num8 > num9 && num9 > num10){
  console.log(`Questa è l'ordine: ${num8}, ${num9}, ${num10}`);
} else if(num10 > num9 && num9 > num8){
  console.log(`Questa è l'ordine: ${num10}, ${num9}, ${num8}`);
} else if(num8 > num10 && num10 > num9){
  console.log(`Questa è l'ordine: ${num8}, ${num10}, ${num9}`);
} else if(num9 > num10 && num10 > num8){
  console.log(`Questa è l'ordine: ${num9}, ${num10}, ${num8}`);
} else if(num9 > num8 && num8 > num10){
  console.log(`Questa è l'ordine: ${num9}, ${num8}, ${num10}`);
} else {
  console.log(`Questa è l'ordine: ${num10}, ${num8}, ${num9}`);

}
}
/* ESERCIZIO 8 ------
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/*{
  let num11 = "10";

if(typeof num11 === ) {
  console.log("è un numero");
} else {
  console.log("non è un numero");
}

console.log(typeof num11);
}*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

{
  let num1 = 65;

if( num1 % 2 ===0 ){
console.log(`${num1} questo numero è pari`);
} else {
  console.log(`${num1} questo numero è dispari`);
};
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/
{
let val = 10
if (val > 5 && val < 10) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  };
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
{
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);
}
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
{
let arr = [];
arr.splice(0, 0, 1 );
arr.splice(1, 0, 2 );
arr.splice(2, 0, 3 );
arr.splice(3, 0, 4 );
arr.splice(4, 0, 5 );
arr.splice(5, 0, 6 );
arr.splice(6, 0, 7 );
arr.splice(7, 0, 8 );
arr.splice(8, 0, 9 );
arr.splice(9, 0, 10 );
console.log(arr);


/* ESERCIZIO 15
Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
arr.splice(9, 1, 100)
console.log(arr);
}
