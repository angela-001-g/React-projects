// Arrow functions and array methods
const tecnologias = ["CSS", "HTML", "JAVASCRIPT", "REACT", "NODE"]
// Las siguientes dos funciones estan en el archivo 08, aquí las convertiras a arrow funtions
const nuevoArray = tecnologias.map( tech =>{
    if(tech === "HTML"){
        return "GraphQL"
    } else {
        return tech
    }
})


const nuevoArray2 = tecnologias.filter( tech => tech !== "HTML")

   