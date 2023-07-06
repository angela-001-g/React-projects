// Objetos - Unir dos objetos o mas
const producto = {
    nombre: "celular", 
    precio: 400,
    disponible: false,
}

const cliente = {
    nombre: "Nicolas",
    premium: true
}

// Debo procurar hacer las cosas sin moduficar el objeto original, si hago: 
// producto.cliente = cliente 
// console.log(producto)
// Modificaré el objeto original y eso es un gran NO

// const newObject = Object.assign(producto, cliente) //El metodo devolverá un nuevo objeto con los dos objetos incluidos
// console.log(newObject) //Como nombre es igual en ambos objs, toma el último
// console.log(producto) //Este objeto sí se modificó

// Usar el spread operator para que haga copias y no modifique los objetos originales
const newObject2 = {...producto, ...cliente}
console.log(newObject2) //El nombre sigue teniendo el mismo problemaz, se sobreescribe con el ultimo objeto, Nicolas  en este casi y borra celular
console.log(cliente)
console.log(producto) //No lo ha modificado ESTA ES LA MEJOR SOLUCIÓN

// Para que no modifique el nombre 
const newObject3 ={
    producto:{...producto},
    cliente:{...cliente}
}
console.log(newObject3) //MEJOR SOLUCIÓN
console.log(producto)






