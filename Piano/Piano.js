class TeclaPiano{
    #archivoDeSonido = '';
    constructor(archivoDeSonido){
        this.#archivoDeSonido = archivoDeSonido;
    }
    play() {
        const teclado = new Audio (this.#archivoDeSonido)
        teclado.play()
    }
}
let tecla_Do = new TeclaPiano('assets/mp3/nota1.mp3');
let elemento_Do = document.querySelector("#do");
elemento_Do.addEventListener("click", () => {
    tecla_Do.play();
})

let tecla_Re = new TeclaPiano('assets/mp3/nota2.mp3');
let elemento_Re = document.querySelector("#re");
elemento_Re.addEventListener("click", () => {
    tecla_Re.play();
})

let tecla_Mi = new TeclaPiano('assets/mp3/nota3.mp3');
let elemento_Mi = document.querySelector("#mi");
elemento_Mi.addEventListener("click", () => {
    tecla_Mi.play();
})

let tecla_Fa = new TeclaPiano('assets/mp3/nota4.mp3');
let elemento_Fa = document.querySelector("#fa");
elemento_Fa.addEventListener("click", () => {
    tecla_Fa.play();
})

let tecla_Sol = new TeclaPiano('assets/mp3/nota5.mp3');
let elemento_Sol = document.querySelector("#sol");
elemento_Sol.addEventListener("click", () => {
    tecla_Sol.play();
})

let tecla_La = new TeclaPiano('assets/mp3/nota6.mp3');
let elemento_La = document.querySelector("#la");
elemento_La.addEventListener("click", () => {
    tecla_La.play();
})

let tecla_Si = new TeclaPiano('assets/mp3/nota7.mp3');
let elemento_Si = document.querySelector("#si");
elemento_Si.addEventListener("click", () => {
    tecla_Si.play();
})

let tecla_Do2 = new TeclaPiano('assets/mp3/nota8.mp3');
let elemento_Do2 = document.querySelector("#do2");
elemento_Do2.addEventListener("click", () => {
    tecla_Do2.play();
})