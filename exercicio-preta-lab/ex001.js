//Questão 8
const nota = 100;
if (nota>=80){
    console.log(`Parabéns, voce faz parte do grupo de pessoas aprovadas`);
} else if (nota <80 && nota>= 60){
    console.log (`Você está na nossa lista de espera`);
} else {
    console.log(`Infelizmente, você reprovou`)
}
console.log(`\n`)

//Questão 9
const n1 = 10,
    n2 = 9;
if (n1>n2){
    console.log(`${n1} é maior que ${n2}`);
} else {
    console.log (`${n2} é maior que ${n1}`)
}

console.log(`\n`)

//Questão 10
const num1 = 22,
    num2 = 88,
    num3 = 67;
if (num1>num2 && num1>num3){
    console.log(`${num1} é maior`);
} else if (num2>num1 && num2>num3){
    console.log (`${num2} é maior`);
} else {
    console.log (`${num3} é maior`)
}

console.log(`\n`)

//Questão 11
const numero1 = 1233566869;
if(numero1%2 === 0){
    console.log(`${numero1} é par!`)
} else {
    console.log(`${numero1} é impar `)
}

console.log(`\n`)

//Questão 12
const horarioAtual = 12;
let mensagem = "";
if (horarioAtual >= 22){
    console.log(mensagem = `Não deveríamos comer nada, é hora de dormir`)
}

