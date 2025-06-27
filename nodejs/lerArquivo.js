const fs = require('fs') //importando um módulo de leitura de arquivos

console.log(__filename);

fs.readFile(__dirname+'/../nome.txt', 'utf-8', (err, data) => {
    if(err){
        console.log("erro na leitura do arquivo", err);
        return;
    }

    console.log(data);

});