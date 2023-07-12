// Otros array methods utiles 
const tecnologias = ["CSS", "HTML", "JAVASCRIPT", "REACT", "NODE"]
const numeros = [10, 20, 30]

let nuevoArray2;
// Filter method
nuevoArray2 = tecnologias.filter( tech => tech !== "HTML")

// Includes method: Para comprobar que algo existe en un arreglo 
const resultado = tecnologias.includes("REACT")
console.log(resultado)

// Some: Me dice si al menos uno cumple con mi condición 
const result = numeros.some(num => num>15) 
console.log(result)

// FInd - Devuelve el primer elemento que cumpla la condicion
const findit = numeros.find(numero => numero > 10 )
console.log(findit)

// Every - Retorna true si todos cumplen la condición y false si no 
const everyIt = numeros.every(numero => numero > 25)
console.log(everyIt)

// Reduce- No estamos seguros jajaa, pero toma dos parametros
const reduceIt = numeros.reduce((total, numero) => numero + total, 0)
console.log(reduceIt)



