let scoreH = 0
let scoreG = 0

document.getElementById("score-home").textContent = scoreH
document.getElementById("score-guest").textContent = scoreG

let scoreHome = document.getElementById("score-home")

function sum1H() {
    // console.log("click")
    scoreH += 1
    scoreHome.textContent = scoreH
}

function sum2H() {
    // console.log("click")
    scoreH += 2
    scoreHome.textContent = scoreH
}

function sum3H() {
    // console.log("click")
    scoreH += 3
    scoreHome.textContent = scoreH
}

let scoreGuest = document.getElementById("score-guest")

function sum1G() {
    // console.log("click")
    scoreG += 1
    scoreGuest.textContent = scoreG
}

function sum2G() {
    // console.log("click")
    scoreG += 2
    scoreGuest.textContent = scoreG
}

function sum3G() {
    // console.log("click")
    scoreG += 3
    scoreGuest.textContent = scoreG
}

