class CuentaBancaria {
    #saldo = 0;

    constructor(saldo) {
        this.#saldo = saldo;
    }
    depositar(value) {
        console.log(`El mozo de la vecina le depositó ${value} a su cuenta para la manutención del marido`)
    }
    retirar(value) {
        console.log(`Tuve que retirar ${value} de mi cuenta, para pagar la comida de mis gatos`)
    }
}

const miCuenta = new CuentaBancaria(1000000);
console.log(miCuenta);

miCuenta.depositar(500000)
miCuenta.retirar(220000)