let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function respostaConsole() {
    console.log('O botão foi clicado');
}

function ativarAlerta() {
    alert('Eu amo JS');
}

function perguntarCidade() {
    let cidade = prompt('Informe o nome de uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function somaNumeros() {
    let numero1 = parseInt(prompt('Informe o primeiro número: '));
    let numero2 = parseInt(prompt('Informe o primeiro número: '));
    let resultado = numero1 + numero2;

    alert(`Soma de ${numero1} + ${numero2} é igual a ${resultado}`);
}