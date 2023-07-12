// Fetch API - Async await

const url = "https://jsonplaceholder.typicode.com/comments"

// fetch(url).then((respuesta)=>{ //Aqui buscamos el valor de respuesta 
//     return respuesta.json() //Esto me da acceso a un segundo .then
// })
// .then((resultado) =>{ //Aqui buscamos el valor de resultado, me van a aparecer los 500 comentarios de la url
//     resultado.forEach(comentario => {
//         console.log(comentario)
//     });
// })

const consultarAPI = async () => { //async para hacer la función asincrona 
    const respuesta = await fetch(url)
    console.log("despues de respuesta") // Ver en la consola browser
    const resultado = await respuesta.json() 
    console.log("despues de resultado") //Ver en la consola browser
    // resultado.forEach(comentario => {
    //     console.log(comentario)
    //  });
}
consultarAPI()