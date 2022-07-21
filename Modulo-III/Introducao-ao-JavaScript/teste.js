//Variáveis (var) e Constantes (const)

// var y = 0; comentario
var x =1;

/* var y = 0; 
var x =1; comentario de várias linhas*/

var z =2;

const CONSTANTE = 5

//Funções

function soma(a,b){
    console.log(a+b); //pra ver no console somente
    return a+b; //para receber o valor para futuras manipulações
}

soma(2, 3); //chamando a função soma

console.log('Hello world!');

function returnEvenValues (array) {
    let evenNums = []
    for(let i =0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]);
        }
        else{
            console.log(`${array[i]} não é par` )
        }
    }
    console.log('Os números pares são: ', evenNums);
}

let array = [1,2,4,5,7,8]

returnEvenValues(array)

