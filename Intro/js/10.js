// Arrays - Iteraciones
const tecnologias = ["CSS", "HTML", "JAVASCRIPT", "REACT", "NODE"]

const arrayForEach = tecnologias.forEach(function(tech){
    return tech
})
console.log(arrayForEach) //Undefined porque no crea el array

const arrayMap = tecnologias.map(function(i){ //Permite crear un nuevo arreglo, es la principal diferencia con el forEach
    return i
})
console.log(arrayMap) //Crea nuevo array 


function suma(numero1, numero2 = 5 ){
    console.log(numero1 + numero2)
}
suma(5, 10)
