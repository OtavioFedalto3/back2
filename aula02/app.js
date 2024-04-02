// lendo arquivo usando o FileSystem
const fs=require('fs');
// fs.readFile('./dados.csv',(erro,data)=>{
//     if(erro){
//         console.log(erro)
//     }else{
//         console.log(data.toString());
//     }
// })

//testar o método assincrono

let dados="";
if(fs.existsSync('dados.csv')){
    dados=fs.readFileSync('dados.csv');
    console.log(dados.toString());
}else{
    console.log("Arquivo não encontrado");
}
console.log("Segunda Operação");