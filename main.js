const cookieMessages = [
    "O sucesso está no horizonte, mantenha o foco.",
    "Grandes realizações exigem grandes esforços.",
    "Seja corajoso em suas decisões e confiante em seus passos.",
    "A sorte favorece os audazes.",
    "Acredite em si mesmo e tudo será possível.",
    "A paciência é uma virtude que traz grandes recompensas.",
    "As oportunidades estão sempre ao seu redor, apenas esteja pronto para agarrá-las.",
    "O amor é a maior força do universo, compartilhe-o generosamente.",
    "Aprenda com o passado, viva no presente e sonhe com o futuro.",
    "A perseverança é a chave para superar todos os obstáculos.",
    "Grandes sonhos começam com pequenas ações."
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


  