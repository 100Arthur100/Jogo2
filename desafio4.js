//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Boas vindas');

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
nome = 'arthur';
console.log('Olá' + nome + '!');

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
nome = 'arthur';
alert('Olá ' + nome);

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagem = prompt('Qual a linguagem que vc mais gosta?');
console.log(linguagem);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
valor1=1;
valor2=2;
resultado = valor1 + valor2;
console.log("A soma de " + valor1 + " e " + valor2 + " é igual a " + resultado + ".");

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
valor1=1;
valor2=2;
resultado = valor1 - valor2;
console.log("A diferença de " + valor1 + " e " + valor2 + " é igual a " + resultado + ".");

//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt("Digite sua idade");
if(idade >= 18){
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
};

//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
var numero = prompt("Bota um número aleatório aí");
if(numero>0){
    console.log("Número positivo");
} if(numero<0){
    console.log("Número negativo");
} else {
    console.log("Número 0");
};

//Use um loop while para imprimir os números de 1 a 10 no console.
numero = 1;
while(numero != 11){
    console.log(numero);
    numero++;
}

//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 1;
if(nota >= 7){
    alert('aprovado');
} else {
    alert('Reprovado');
};

//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numero = Math.random();
console.log(numero);

//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
numero = parseInt(Math.random()*10) + 1;
console.log(numero);

//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
numero = parseInt(Math.random()*1000) + 1;
console.log(numero);