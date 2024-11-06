const musketeers = ["Athos", "Porthos", "Aramis"];
musketeers.push("D'Artagnan");
for (let i = 0; i < musketeers.length; i++) {
console.log(musketeers[i]);
};
musketeers.forEach(musketeer => {
    console.log(musketeer);
});
musketeers.splice(2, 1);
for (const musketeer of musketeers) {
    console.log(musketeer);
};

const values = [3, 11, 7, 2, 9, 10];
let soma = 0;
for (let i = 0; i < values.length; i++) {
    soma += values[i];
};
console.log(soma);

const valuesTwo = [3, 11, 7, 2, 9, 10];
console.log(valuesTwo.length);

let palavras = [];

while (true) {
    let palavra = prompt("Digite uma palavra (ou 'stop' para sair):");

    if (palavra === "stop") {
        break;
    }

    palavras.push(palavra);
}

console.log("Palavras digitadas: ", palavras);
