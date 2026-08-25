const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
entrada.question("Digite o nome do jogador: ", (nome) => {
    entrada.question("Digite os pontos conquistados:" ,(pontos) => {
        entrada.question("Digite os pontos bônus: ", (bonus) => {

            pontos = Number(pontos);
            bonus = Number(bonus);
    const pontuacaofinal = pontos + bonus;

    console.log("jogador:" ,nome);
console.log("Pontuação final:" , pontuacaofinal );
entrada.close()

        })
    })
})
