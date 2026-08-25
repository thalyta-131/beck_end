const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
entrada.question("digite seu nome:", (nome) => {
    console.log("olá " + nome);
    entrada.close()
})
