// Objetos - Destructuring de 2 o mas objetos
const producto = {
    nombre: "celular", 
    precio: 400,
    disponible: false,
}

const cliente = {
    nombre: "Nicolas",
    premium: true
}

// Con el destructuring, es un problema que ambos objetos tengan una key con el mismo nombre 
// Se puede asignar un alias para no cambiarle el nombre a la key

const {nombre, precio, disponible} = producto
const {nombre:nombreCliente, premium} = cliente //Se le asigna el alias con :

console.log(nombre,precio,disponible)
console.log(nombreCliente,premium)
