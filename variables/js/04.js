// Objetos
// En vez de declarar las siguientes tres variables por separado(como se ve), las metemos en un objeto
// const nombre = "tablet"
// const precio = 300 
// const disponible = true 

// La ventaja de los objetos es que pueden almacenar más de una variable

const producto = {
    nombre: "celular", 
    precio: 400,
    disponible: false,
}
console.log(producto.precio)

// Destructuring 

const { nombre, precio } = producto //Para acceder por medio de destructuring en ve de poner . 
console.log(nombre) 

const { marca } = producto //Puedo poner variables que no existen en el objeto
console.log(marca)

console.log(producto)

//Objet Literal Enhacement o la mejora del objeto literal: Sirve para poner variables que están afuera, dentro del objeto

const autenticado = true 
const usuario= "Ange" 

const newObject = { //Como se llaman igual, puedo no poner el nombre de nuevo luego de los dos puntos
    autenticado: autenticado, 
    usuario: usuario
}

console.table(newObject)



