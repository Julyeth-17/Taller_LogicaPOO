class Animal {
    constructor() {}
    hablar() {}
}

class Perro extends Animal {
    constructor(ladrar){ 
    super(ladrar)
        this.ladrar = ladrar
    }
    hablar() {
        return `El perro hace así: ${this.ladrar}.`
    }
}

class Gato extends Animal {
    constructor(maullar){
    super(maullar) 
        this.maullar = maullar
    }
    hablar() {
        return `El gato hace así: ${this.maullar}.`
    }
}

const lomito = new Perro("woof woof");
console.log(lomito)
lomito.hablar();


const michi = new Gato("miaw miaw");
console.log(michi)
michi.hablar();

const divCat = document.querySelector('#bMichito')
divCat.addEventListener('click', function (e) {
    e.preventDefault();
    Swal.fire({
        text: michi.hablar(),
        imageUrl: 'assets/img/mochi-cat-chibi-cat.gif',
        imageWidth: 400,
        imageHeight: 300,
    })
})

const divDog = document.querySelector('#bLomito')
divDog.addEventListener('click', function (e) {
    e.preventDefault();
    Swal.fire({
        text: lomito.hablar(),
        imageUrl: 'assets/img/corgi-excited.gif',
        imageWidth: 400,
        imageHeight: 300,
    })
})   
