//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let data = prompt('Escolha um dia da semana');
if(data == 'Sábado'){
    alert('Bom fim de semana!');
} else if(data =='Domingo'){
    alert('Bom fim de semana!');
} else{
    alert('Boa semana!');
}

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
numero = prompt('Escolha um numero');
if(numero>=0){
    alert('Positivo');
}else{
    alert('Negativo');
}

///Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontos = prompt('Pontos ganhos');
if(pontos >=100){
    console.log('Parabéns');
}else{
    console.log('tente d nv');
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let conta = 1000;
alert('Seu saldo é: R$' + conta);

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt('Insira seu nome:');
alert('Boas vindas ' + nome);
