let n = prompt("Escolha um numero de 0 a 10")
n = parseInt(n)

let  s = Math.floor(Math.random() * 11 )
document.querySelector(".info").innerHTML = s

if (n === s) {
    alert("VOCÊ ACERTOU O NUMERO")

} else {
    alert("NÃO FOI DESTA VEZ")
}
