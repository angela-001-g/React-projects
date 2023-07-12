// Arrays 
const tecnologias = ["CSS", "HTML", "JAVASCRIPT", "REACT", "NODE"]

//  Añadir elementos al array 
// tecnologias.push("RUBY") //Lo agrega al final 
// tecnologias.unshift("C++") //Lo agrega al inicio 
//  El problema de lo anterior es que modifica el arreglo, la mejor solución usando react y sin modificar el original es: 
// const newTec = [...tecnologias, "SQL"] //Al final
// const newTec2 = ["JAVA", ...newTec] //Al inicio

//  Eliminar elementos de un array: 
//      Sin persistencia de datos: 
//     tecnologias.pop() //Elimina el ultimo elemento
//     tecnologias.shift() //Elimina el primer elemento 
//      tecnologias.splice(0, 3) Elimina los elementos que quiera 

    // Con persistencia de datos: (Mejor solución
    const nuevoAr = tecnologias.filter(function(tech){
        return tech !== "HTML"
    }) //Me permite filtrar elementos e iterar en ellos para identificar qué elementos hay. Le puedes pasar lo que quieras para eliminar o agregar un alemento 
    console.log(nuevoAr)

    // map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

    const nuevoArray = tecnologias.map(function(tech){
        if(tech === "HTML"){
            return "GraphQL"
        } else {
            return tech
        }
    })

    console.log(nuevoArray)
