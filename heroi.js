let heroiNome = "Jiban"

let heroiXP = 7500

let categoria
if (heroiXP < 1000) {
    categoria = "Ferro"
} else if (heroiXP >= 1001 && heroiXP <= 2000) {
    categoria = "Bronze"
} else if (heroiXP >= 2001 && heroiXP <= 5000) {
    categoria = "Prata"
} else if (heroiXP >= 5001 && heroiXP <= 7000) {
    categoria = "Ouro"
} else if (heroiXP >= 7001 && heroiXP <= 8000) {
    categoria = "Platina"
} else if (heroiXP >= 8001 && heroiXP <= 9000) {
    categoria = "Ascendente"
} else if (heroiXP >= 9001 && heroiXP <= 10000) {
    categoria = "Imortal"
} else {
    categoria = "Radiante"
}
console.log(`O heroi ${heroiNome} tem ${heroiXP} XP  e esta na categoria ${categoria}`)