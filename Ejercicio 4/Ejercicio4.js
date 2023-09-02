class Figura {
    constructor() { }
    calcularArea() { }
}

class Circulo extends Figura {
    constructor() {
        super();
    }
    calcularArea(radio) {
        const areaC = Math.PI * Math.pow(radio, 2);
        return areaC.toFixed(2)
    }
}

class Rectangulo extends Figura {
    constructor() {
        super();
    }
    calcularArea(base, altura) {
        const areaR = base*altura
        return areaR
    };
}

const miCirculo = new Circulo();
console.log(miCirculo.calcularArea(5))
console.log(miCirculo);

const miRectangulo = new Rectangulo();
console.log(miRectangulo.calcularArea(23, 14))
console.log(miRectangulo);

