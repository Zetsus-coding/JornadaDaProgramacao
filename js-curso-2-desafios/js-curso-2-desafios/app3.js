function calcularIMC(altura, peso) {
    return ('Seu IMC é ' + peso/Math.pow(altura, 2));
}

console.log(calcularIMC(1.7, 60));
//----------------------------------

function calcularFatorial(numero) {
    let cont = 1;
    let resultado = 1;

    while(numero >= cont) {
        resultado *= cont;
        cont++;
    }

    return `O fatorial de ${numero} é ` + resultado;
}

console.log(calcularFatorial(5));
//----------------------------------

function converteDolar(valor) {
    return 'O resultado da conversão será ' + (valor * 4.8);
}

console.log(converteDolar(5));
//----------------------------------

function calcularMedidas(altura, largura) {
    let area = altura * largura;
    let perimetro = (2 * altura) + (2 * largura);

    return `Área: ${area}; Perímetro: ${perimetro}`;
}

console.log(calcularMedidas(4,5));
//----------------------------------

function calcularPerimetroCirculo(raio) {
    return 'Perímetro do círculo = ' + (2 * 3.14 * raio);
}

console.log(calcularPerimetroCirculo(3));
//----------------------------------

function tabuada(numero) {
    let cont = 1;

    while(cont <= 10)
    {
        console.log(`${cont} x ${numero} = ` + (cont * numero));
        cont++;
    }
}

tabuada(9);
//----------------------------------
