//função declaration - declaração
/* 
1. palavra reserva function
2. nome da função
3. () parentes
4. {} chaves - dentro das chaves é o copro (escopo) da função
*/

function saudacao(){
    console.log("executando saudação");
}

//chamar a função
saudacao()

//função sem retorno - void

function semRetorno(){
    console.log("apenas executa e não retorna nada");
}

semRetorno()

//função com retorno
function comRetorno(){
    return 1 + 1
}

let resultado = comRetorno()
console.log(comRetorno());

//funções podem ter parametros
//parametros são uma forma de injetar um valor dentro do corpo da função
function comParametro(mensagem){
    console.log(mensagem)
}
comParametro("olá mundo")

function comParametros(valor1, valor2){
    return valor1 + valor2
}

console.log(comParametros(100,50));

//passando parametros com valor padrão

function parametroPadrao(v1 = 0, v2 = 0){
    return v1 + v2
}

console.log(parametroPadrao(300, 150));

