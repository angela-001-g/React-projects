// Objetos - Manipulación

const producto = {
    nombre: "celular", 
    precio: 400,
    disponible: false,
}
// Reescribir un valor
producto.nombre = "Laptop ASUS" 
console.table(producto)

// Añadir nuevo valor si no existe
producto.ciudad = "Bogotá"
console.table(producto)

// Eliminar 
delete producto.precio
console.table(producto)

Object.freeze(producto) //A partir de este comando, ya no se puede modificar el objeto, ni reescribir, añadir o eliminar 
Object.seal(producto) //Me permite reescribir las propiedades del objeto, pero no añadir ni eliminar




