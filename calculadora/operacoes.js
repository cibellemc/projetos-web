const button_som = document.getElementById("som")
const button_sub = document.getElementById("sub")
const button_mult = document.getElementById("mult")
const button_div = document.getElementById("div")

const n1 = document.getElementById("primeiro_numero")
const n2 = document.getElementById("segundo_numero")

button_som.onclick = () => {
    const a = n1.value
    const b = n2.value
    alert(`Soma = ${Number(a) + Number(b)}`)
}

button_sub.onclick = () => {
    const a = n1.value
    const b = n2.value
    alert(`Subtração = ${a - b}`)
}

button_mult.onclick = () =>{
    const a = n1.value
    const b = n2.value
    alert(`Multiplicação = ${a * b}`)
}

button_div.onclick = () => {
    const a = n1.value
    const b = n2.value
    alert(`Divisão = ${a / b}`)
}