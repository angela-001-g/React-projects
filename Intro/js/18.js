// Fetch API - promises

const url = "https://jsonplaceholder.typicode.com/comments"

fetch(url).then((respuesta)=>{ //Aqui buscamos el valor de respuesta 
    return respuesta.json() //Esto me da acceso a un segundo .then
})
.then((resultado) =>{ //Aqui buscamos el valor de resultado, me van a aparecer los 500 comentarios de la url
    resultado.forEach(comentario => {
        console.log(comentario)
    });
})
// Cundo vea .then significa que estan utilizando promises






