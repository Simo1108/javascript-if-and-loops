//Scrie un program care afișează numerele de la 1 la 10 folosind o buclă do-while.
let numar = 1;
do {
    console.log(numar);
    numar++;
} while (numar < 11);
//Scrie un program care afișează toate numerele pare între 0 și 20 folosind o buclă for.

for (let i = 0; i <= 20; i++) {
    if (i / 2 == 0) {
        console.log(i);
    }
}
//Scrie un program care citește două numere de la tastatură și afișează toate numerele între aceste două numere folosind o buclă for.
const number1 = 10;
const number2 = 18;
if (number1 <= number2) {
    for (let i = number1; i <= number2; i++) {
        console.log(i);
    }
} else {
    for (let i = number2; i <= number1; i++) {
        console.log(i);
    }
}
//Scrie un program care citește un șir de caractere de la tastatură și afișează numărul de vocale folosind o buclă for și condiția pentru a determina dacă un caracter este o vocală.
const inputString = 'enciclopedie';
let vowelCount = 0;
for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        vowelCount++;
    }
}
console.log(`Number of vowels in the text: ${vowelCount}`);
//Scrie un program care citește un număr de la tastatură și afișează tabla înmulțirii pentru acel număr folosind o buclă for.
let num = 10;
 for( let i = 2 ; i <= 12; i++){
   const result = num * i;
   console.log(`${num} x ${i} = ${result}`);
 }