let numeroMinimo = 0;
let numeroMaximo = 0;

// Fun��o js de n�mero aleat�rio (math.random mozilla)
// Para alterar o valor que vai ser utilizado no jogo, basta alterar os valores passados quando se chama a fun��o
function numeroAleatorio(min, max) {
    numeroMinimo = Math.ceil(min);
    numeroMaximo = Math.floor(max);
    return Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1) + numeroMinimo); // Inclui o n�mero m�x e m�n.
}

let chute;
let contadorDeTentativas = 1;
let numeroSecreto = numeroAleatorio(1,10); // Alterar m�n e m�x aqui
//console.log(numeroSecreto);

alert('Bem vindo ao jogo do numero secreto!');

while (chute !== numeroSecreto) {

    chute = prompt(`Escolha um numero entre ${numeroMinimo} e ${numeroMaximo}`);

    // Se o chute for igual ao n�mero secreto (if true) fa�a um sen�o (if false) outro
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O n�mero secreto � menor que ${chute}`);
        } else {
            alert(`O n�mero secreto � maior que ${chute}`);
        }
        contadorDeTentativas++;
    }
}

let palavraTentativa = contadorDeTentativas > 1 ? 'tentativas' : 'tentativa'

alert(`Parabens, voc� acertou! O n�mero era: ${numeroSecreto}. Voc� precisou de ${contadorDeTentativas} ${palavraTentativa}`);
