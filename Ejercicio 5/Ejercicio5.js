class Direccion {
    constructor(calle, ciudad, ZIPcode){
        this.calle = calle;
        this.ciudad = ciudad;
        this.zipcode = ZIPcode;
    }
}

class Persona {
    constructor(nombre, direccion){
        this.nombre = nombre;
        this.direccion = direccion;
    }
}

const x = new Direccion(100, "Bogotá", 110111);
console.log(x);

const miPersona = new Persona("Toribio", x.calle);
console.log(miPersona);

console.log(`${miPersona.nombre} vive comodamente bajo el puente de la calle ${x.calle} en la ciudad de ${x.ciudad} y da su codigo postal ${x.zipcode}, para recibir pedidos de Amazon.`);