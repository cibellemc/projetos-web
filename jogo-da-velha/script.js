const selectBox = document.querySelector(".select-box")
selectXBtn = selectBox.querySelector(".playerX")
selectOBtn = selectBox.querySelector(".playerO")
player_box = document.querySelector(".player-box")
allBox = document.querySelectorAll(".game button")
player = document.querySelector(".player")

window.onload = () => {
    for (let i = 0; i < allBox.length; i++) {
        allBox[i].setAttribute("onclick", "clickedBox(this)")   
    }

    selectXBtn.onclick = () => {
        selectBox.classList.add("hide")
        player_box.classList.add("show")
    }

    selectOBtn.onclick = () => {
        selectBox.classList.add("hide")
        player_box.classList.add("show")
        player.setAttribute("class", "player active circle")
    }
}

function clickedBox(element){
    // quem começar fica ativo, bota o contrário
    if(player.classList.contains("circle")){
        //tem que ter ``
        element.innerHTML = `<i class="fa-regular fa-circle"></i>`
        player.classList.add("active")
    } else {
        element.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        player.classList.add("active")
    }
    element.style.pointerEvents = "none"
    bot()
}   

function bot(){
    let array = []
    for (let i = 0; i < allBox.length; i++) {
        if(allBox[i].childElementCount == 0) {
            array.push(i)
        }        
    }

    let randomBox = array[Math.floor(Math.random() * array.length)]

    if(array.length > 0){ //se já tiver começado, coloca na posição aleatória e o símbolo contrario
        if(player.classList.contains("circle")){
            //tem que ter ``
            allBox[randomBox].innerHTML = `<i class="fa-solid fa-xmark"></i>`
            player.classList.remove("active")
        } else {
            allBox[randomBox].innerHTML = `<i class="fa-regular fa-circle"></i>`
            player.classList.remove("active")
        }
    }
}