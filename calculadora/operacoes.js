// duas áreas de visualização, uma para os números correntes e outra para o resultado
let cursor = document.querySelector(".numero_digitado")
let resultado = document.querySelector(".resposta")

// inclui operadores e números
const botoes = document.querySelectorAll("button")

// "teclas especiais", com funções diferenciadas
const limpar_tela = document.getElementById("limpar")
const apagar = document.getElementById("apagar")
const igual = document.getElementById("igual")

// ao clicar numa tecla, ela será acrescida ao número digitado e sera exibido em "tempo real" o resultado
botoes.forEach(element => {
    element.onclick = () => {
        //inner.html retorna o conteúdo
        cursor.innerHTML += element.value
        resultado.innerHTML = eval(cursor.innerHTML)
    }
});

//quando limpar, precisa limpa a operação corrente e zera o resultado
limpar_tela.onclick = () => { 
    cursor.innerHTML = " "
    resultado.innerHTML = "0"

// reseta as propriedades css
    cursor.className = "numero_digitado"
    resultado.className = "resposta"
}

apagar.onclick = () => {
    // garantir que somente ao clicar em igual as propriedades serão trocadas
    cursor.className = "numero_digitado"
    resultado.className = "resposta"

    if (cursor.textContent) { 
        // se tiver número digitado armazena esse valor
        let numero_corrente = document.querySelector(".numero_digitado").innerHTML
        // o cursor vai receber o conteúdo decrescido do último termo - funciona como um pop()
        cursor.innerHTML = numero_corrente.substring(0, numero_corrente.length - 1)
    }
}

igual.onclick = () => {
    // "inverte" as propriedades css, a resposta fica maior
    cursor.className = "resposta"
    resultado.className = "numero_digitado"
}