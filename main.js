const cookieMessages = [
    "A smile is your passport into the hearts of others.",
    "Your hard work will soon pay off.",
    "Every exit is an entry somewhere else.",
    "You are the master of every situation.",
    "Good things come to those who wait.",
    "Your kindness will lead you to success.",
    "The best is yet to come.",
    "A dream you dream alone is only a dream. A dream you dream together is reality.",
    "Opportunity knocks softly, listen carefully.",
    "Believe in yourself and all that you are.",
    "Life is a journey, not a destination."
];


const home = document.querySelector(".home")
const luck = document.querySelector(".luck")
const fortuneCookie = document.getElementById("fortuneCookie")
const btnPlayAgain = document.querySelector("#btnPlayAgain")
let msg = document.getElementById("message")

// Events
fortuneCookie.addEventListener('click', openCookie)
btnPlayAgain.addEventListener('click', playAgain)


// Functions
function openCookie() {
    toggleScreen()
    msgAnimation()
    let randomMessage = Math.floor(Math.random() * 10)

    msg.innerText = cookieMessages[randomMessage]
}

function playAgain() {
    toggleScreen()
    msgAnimation()
}

function toggleScreen() {
    home.classList.toggle("hide")
    luck.classList.toggle("hide")
}

function msgAnimation () {
    msg.classList.toggle("msgAnimation")
}


  