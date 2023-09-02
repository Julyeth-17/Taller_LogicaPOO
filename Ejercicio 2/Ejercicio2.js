class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    arrancar() {
        console.log(`El ${this.marca} ${this.modelo} tiene problemas para arrancar.`);
    }
    detener() {
        console.log(`El ${this.marca} ${this.modelo} no se puede detener.`);
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo, velocidad) {
        super(marca, modelo);
        this.velocidad = velocidad;
    }
        acelerar() {
            console.log(`El coche ${this.marca} ${this.modelo} ha acelerado a ${this.velocidad} km/h.`)
        } 
    }

const miVehiculo = new Vehiculo("Mercedes", "Gullwing")
console.log(miVehiculo)

miVehiculo.arrancar()
miVehiculo.detener()

const miCoche = new Coche("Mazda", "CX-5 2022", "180")
console.log(miCoche)

miCoche.arrancar()
miCoche.detener()
miCoche.acelerar()