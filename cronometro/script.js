let sec = 0
let min = 0

function pause() {
    console.log("pausei");
}

function stop(){
    console.log("parei");

}

function start() {
    setInterval(count_sec, 1000)
}

function count_sec (){
    sec++
    if(sec == 60) {
        sec = 0 + "0"
        count_min()
    }
    document.getElementById("segundos").innerHTML = "0" + sec
}

function count_min() {
    min++
    if(min == 60) {
        min = 0 + "0"
    }
    document.getElementById("minutos").innerHTML = "0" + min
}