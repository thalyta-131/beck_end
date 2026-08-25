const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite seu nome: ", (nome) => {
    entrada.question("Digite quanto tem guardado: ", (guardado) => {
entrada.question("Digite o quanto você quer guardar esse mês: ", (guardar) => {

guardado = Number(guardado);
          guardar = Number(guardar);
    const valorfinal = guardado + guardar;

    console.log("nome:" ,nome);
console.log("Valor final:" , valorfinal );
entrada.close()

})
    })
})
