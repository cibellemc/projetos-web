const selectBox = document.querySelector(".select-box")
selectXBtn = selectBox.querySelector(".playerX")
selectOBtn = selectBox.querySelector(".playerO")
player_box = document.querySelector(".player-box")
allBox = document.querySelectorAll(".game button")
player = document.querySelector(".players")

window.onload = () => {
    selectXBtn.onclick = () => {
        selectBox.classList.add("hide")
        player_box.classList.add("show")
    }
    selectOBtn.onclick = () => {
        selectBox.classList.add("hide")
        player_box.classList.add("show")
        player.setAttribute("class", "players active player")
    }
}

let playerXIcon = "fa fa-times"
let playerOIcon = "fa fa-circle"