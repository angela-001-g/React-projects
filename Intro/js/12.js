// Functions - Arrow Functions
    // La funcion expression normal: 
const suma = function(num3, num4){
    return num3 + num4
}

    // Arrow Function: Es como so la flecha reemplazara la palabra function de la function expression

const resta = (num1, num2) => {
    return num1 - num2
}
console.log(resta(2, 3)) 
//  Si solo tengo una linea de codigo, puedo resumirlo así: 
const division = (num, dem) => num/dem 

const resultado = division(10, 2)
console.log(resultado)

// Si solo tengo un parametro puedo resumirlo así: 
const multi2 = numero => numero*2 
console.log(multi2(20)) 





