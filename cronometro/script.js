let sec = 0
let min = 0
let hr = 0
let tempo 

function pause() {
    tempo = clearInterval(tempo)
}

function stop(){
    tempo = clearInterval(tempo)
    sec = "00"
    min = "00"
    hr = "00"
    document.getElementById("horas").innerHTML = sec
    document.getElementById("minutos").innerHTML = sec
    document.getElementById("segundos").innerHTML = sec
}

function start() {
    tempo = setInterval(count_sec, 1000)
}

function count_sec (){
    sec++

    // verificar se é diferente de 0 pois fica 000
    if (sec != 0 && sec <= 9) {
        document.getElementById("segundos").innerHTML = "0" + sec
    } else {
        if(sec == 60) {
            sec = "00"
            count_min()
        }
        document.getElementById("segundos").innerHTML = sec
    }
}

function count_min() {
    min++

    if (min <= 59) {
        document.getElementById("minutos").innerHTML = "0" + min
    } else {
        min = 0 + "0"
        count_hr()
        document.getElementById("minutos").innerHTML = min
    }
}

function count_hr() {
    hr++
    document.getElementById("horas").innerHTML = "0" + hr
}