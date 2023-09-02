class CuentaBancaria {
    #saldo = 0;

    constructor(saldo) {
        this.#saldo = saldo;
    }
    depositar(value) {
        // depositar plata
        this.#saldo = this.#saldo + value;
        console.log(`El mozo de la vecina le depositó ${value} a su cuenta para la manutención del marido`)
        console.log(`Su nuevo saldo es ${this.#saldo}`)
    }
    retirar(value) {
        if (value > this.#saldo) {
            console.log("Lo, lamentamos, no existen fondos suficientes");
            return;
        }
        this.#saldo = this.#saldo - value;
        console.log(`Tuve que retirar ${value} de mi cuenta, para pagar la comida de mis gatos`)
        console.log(`Su nuevo saldo es ${this.#saldo}`)
        return
    }
}

const miCuenta = new CuentaBancaria(1000000);
console.log(miCuenta);

miCuenta.depositar(500000)
miCuenta.retirar(22000)

miCuenta.retirar('{one hundred}')
console.log("Lo, lamentamos, ${one hundred} no es una opción válida");

miCuenta.retirar('{food}')
console.log("Lo, lamentamos, ${food} no es una opción válida");