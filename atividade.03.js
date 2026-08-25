const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite seu nome:", (nome) => {
    entrada.question("Digite seu curso: ", (curso) => {
        entrada.question("Digite seu máteria: ", (máteria) => {
            entrada.question("Digite seu turno: ", (turno) => {

 console.log("Olá", nome, "!");
    console.log("Você cursa", curso, "estuda", máteria);   
    console.log(" Seu turno", turno);  
    entrada.close()  
         })
     })
})
})
