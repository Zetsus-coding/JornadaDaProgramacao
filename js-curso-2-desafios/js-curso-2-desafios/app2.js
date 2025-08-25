function olaMundo() {
    console.log('Olá mundo');
}

olaMundo();

// --------------------------------

function olaNome(nome) {
    console.log(`Olá ${nome}`);
}

olaNome('Teste');

//----------------------------------

function dobraNumero(num) {
    
    let numero = (parseInt(num) * 2);
    
    console.log(`Número dobrado: ${numero}`);
}

dobraNumero(2);

//----------------------------------

function mediaNumeros(num1, num2, num3) {
    let media = parseInt(num1 + num2 + num3)/3
    return media;
}

console.log(mediaNumeros(2,3,4));

//----------------------------------

function maiorNumero(num1, num2) {
    console.log(num1 > num2 ? num1 + " é maior que " + num2 : num2 + " é maior que " + num1);
}

maiorNumero(5,4);

//----------------------------------

function multiplicaNumero(num1) {
    num1 = parseInt(num1);
    console.log(`O resultado de ${num1} * ${num1} é ` + num1*num1)
}

multiplicaNumero(6);