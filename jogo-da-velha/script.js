const selectBox = document.querySelector(".select-box")
selectXBtn = selectBox.querySelector(".playerX")
selectOBtn = selectBox.querySelector(".playerO")
player_box = document.querySelector(".player-box")
allBox = document.querySelectorAll(".game button")
player = document.querySelector(".player")
resultado = document.querySelector(".result-box")
wonText = resultado.querySelector(".won-text")
replayBtn = resultado.querySelector(".btn")
let playerSign = "X"
let runBot = true

// quando a pag carregar
window.onload = () => {
    // pra cada botão presente na "caixa de botões"
    for (let i = 0; i < allBox.length; i++) {
        // no evento onclick a função será realizada
        allBox[i].setAttribute("onclick", "clickedBox(this)")   
    }

    // ao clicar em qualquer botão, a caixa de pergunta sobre os jogadores sai e o "game" aparece
    selectXBtn.onclick = () => {
        selectBox.classList.add("hide")
        player_box.classList.add("show")
    }

    selectOBtn.onclick = () => {
        selectBox.classList.add("hide")
        player_box.classList.add("show")
        // na vez do círculo, outro nome é atribuido à classe do player
        player.setAttribute("class", "player circle active")
    }
}

function clickedBox(element){
    // se começa com círculo
    if(player.classList.contains("circle")){
        playerSign = "O"
        //tem que ter ``
        element.innerHTML = `<i class="fa-regular fa-circle"></i>`
        player.classList.remove("active")
        // id com o player ativo
        element.setAttribute("id", playerSign)
    } else {
        playerSign = "X"
        element.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        player.classList.add("active")
        element.setAttribute("id", playerSign)
    }
    selectWinner()
    element.style.pointerEvents = "none"

    let delayTime = ((Math.random() * 1000) + 200).toFixed()
    setTimeout(()=>{bot(runBot)}, delayTime)
}   

function bot(runBot){
    if(runBot){
        playerSign = "O"
        let array = []
        for (let i = 0; i < allBox.length; i++) {
            if(allBox[i].childElementCount == 0) {
                array.push(i)
            }        
        }
    
        let randomBox = array[Math.floor(Math.random() * array.length)]
    
        // depois de iniciado coloca icon na posição aleatória e o símbolo contrario
        if(array.length > 0){ 
            if(player.classList.contains("circle")){
                playerSign = "X"
                //tem que ter ``
                allBox[randomBox].innerHTML = `<i class="fa-solid fa-xmark"></i>`
                player.classList.add("active")
                allBox[randomBox].setAttribute("id", playerSign)
            } else {
                allBox[randomBox].innerHTML = `<i class="fa-regular fa-circle"></i>`
                player.classList.remove("active")
                allBox[randomBox].setAttribute("id", playerSign)
            }
            selectWinner()
        }
        allBox[randomBox].style.pointerEvents = "none"
    }
}

function getClass(idname){
    return document.querySelector(".box" + idname).id
}

function checkClass(val1, val2, val3, sign) {
    return (getClass(val1) == sign &&
        getClass(val2) == sign &&
        getClass(val3) == sign)
}

function selectWinner(){
    //possibilidades de bater
    if (checkClass(1,2,3,playerSign) || 
        checkClass(4,5,6,playerSign) || 
        checkClass(7,8,9,playerSign) ||
        checkClass(1,4,7,playerSign) ||
        checkClass(2,5,8,playerSign) || 
        checkClass(3,6,9,playerSign) || 
        checkClass(1,5,9,playerSign) ||
        checkClass(3,5,7,playerSign))
    {
            //para de rodar
            runBot = false
            bot(runBot)
            setTimeout(()=>{
                player_box.classList.remove("show")
                resultado.classList.add("show")
            }, 700)
            wonText.innerHTML = `Jogador <p>${playerSign}</p> ganhou!`
    } else {
        if (getClass(1) != "" && getClass(2)!="" &&
        getClass(3) != "" && getClass(4)!="" &&
        getClass(5) != "" && getClass(6)!="" &&
        getClass(7) != "" && getClass(8)!="" &&
        getClass(9) != "") {
            runBot = false
            bot(runBot)
            setTimeout(()=>{
                player_box.classList.remove("show")
                resultado.classList.add("show")
            }, 700)
            wonText.innerHTML = `Empate!`
        }
    }
}

replayBtn.onclick = ()=>{
    window.location.reload();
}