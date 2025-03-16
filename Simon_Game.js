let gameSeq = []
let userSeq = []

let btns = ["yellow", "red", "purple", "green"]

let started = false
let lavel = 0
let h3 = document.querySelector("h3")

document.addEventListener("keypress", function(){
    if(started == false) {
        console.log('game is started')
        started = true

        lavelUp()
    }
})

function btnFlash (btn) {
    btn.classList.add("flash")
    setTimeout(function() {
        btn.classList.remove("flash")
    }, 250 )
}

function userFlash (btn) {
    btn.classList.add("userflash")
    setTimeout(function() {
        btn.classList.remove("userflash")
    }, 250 )
}

function lavelUp() {
    userSeq = []
    lavel++
    h3.innerText = `Level ${lavel}`

    let randomInx = Math.floor(Math.random() * 4)
    let randomColor = btns[randomInx]
    let randbtn = document.querySelector(`.${randomColor}`)

    // console.log(randomInx)
    // console.log(randomColor)
    // console.log(randbtn)

    gameSeq.push(randomColor)
    console.log(gameSeq)

    btnFlash(randbtn)
}

function checkAns (idx) {
    // console.log("curr lavel :  ", lavel)

    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(lavelUp, 1000)
        }
    } else {
        h3.innerHTML = `game over ! your score was <b> ${lavel} <b/> <br> press any key to start`
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white"
        }, 250)
        reset()
    }
}

function btnPress () {
    console.log(this)
    let btn = this
    btnFlash (btn)

    userColor = btn.getAttribute("id")
    userSeq.push(userColor)

    checkAns(userSeq.length-1)
}

let allBtns = document.querySelectorAll(".btn") 
for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
}

function reset () {
    started = false
    gameSeq = []
    userSeq = []
    lavel = 0
}