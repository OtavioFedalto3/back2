//criar e remover pastas
const fs=require('fs');

//com metodo síncrono
//fs.mkdirSync('logs')

//com método assíncrono

fs.mkdir('logs3',(erro)=>{
    if(erro){
        console.log(erro);
    }
})

//para remover pastas
//testar a existencia
if(fs.existsSync('logs2')){
    fs.rmdirSync('logs2');
}
console.log("fim da execução")