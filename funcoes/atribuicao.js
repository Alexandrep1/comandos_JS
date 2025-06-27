//função de atribuição é aquela que é atribuida a uma expressão (variavel ou constante)
let funcao = function(){
    console.log("função atribuida");
}

funcao()

let anonima = function(){
    return function(){
        console.log("executando funcao anonima");
    }
}