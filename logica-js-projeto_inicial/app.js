let numeroMinimo = 0;
let numeroMaximo = 0;

// Função js de número aleatório (math.random mozilla)
// Para alterar o valor que vai ser utilizado no jogo, basta alterar os valores passados quando se chama a função
function numeroAleatorio(min, max) {
    numeroMinimo = Math.ceil(min);
    numeroMaximo = Math.floor(max);
    return Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1) + numeroMinimo); // Inclui o número máx e mín.
}

let chute;
let contadorDeTentativas = 1;
let numeroSecreto = numeroAleatorio(1,10); // Alterar mín e máx aqui
//console.log(numeroSecreto);

alert('Bem vindo ao jogo do numero secreto!');

while (chute !== numeroSecreto) {

    chute = prompt(`Escolha um numero entre ${numeroMinimo} e ${numeroMaximo}`);

    // Se o chute for igual ao número secreto (if true) faça um senão (if false) outro
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        contadorDeTentativas++;
    }
}

let palavraTentativa = contadorDeTentativas > 1 ? 'tentativas' : 'tentativa'

alert(`Parabens, você acertou! O número era: ${numeroSecreto}. Você precisou de ${contadorDeTentativas} ${palavraTentativa}`);
