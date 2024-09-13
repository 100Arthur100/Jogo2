alert('Jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random()* numeroMaximo +1);
console.log("O número secreto é: " + numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre: ' + numeroMaximo);
    if (chute == numeroSecreto){
        break;
    } else {
        if(chute < numeroSecreto){
            alert('O número secreto é maior que ' + chute);
        } else{
            alert('O número secreto é menor que ' + chute);
        }
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert('Isso ai! Você acertou o número secreto é: ' + numeroSecreto + ' com ' + tentativas + ' ' + palavraTentativa);
