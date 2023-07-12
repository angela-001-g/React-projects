// Async/await - Multiples llamados
const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"

// La siguiente manera no es la mejor pues esto bloqueando codigo (respuesta2, resultado2), que no depende de
// la primera respuesta y resultado, podrian ejecutarse al mismo tiempo 

const consultarAPI = async () => { //async para hacer la función asincrona 
    const inicio = performance.now()
    const respuesta = await fetch(url)
    // console.log("despues de respuesta") // Ver en la consola browser
    const resultado = await respuesta.json() 
    // console.log(resultado) //Ver en la consola browser

    console.log("iniciando segunda consulta")

    const respuesta2 = await fetch(url2)
    const resultado2 = await respuesta2.json() 
    // console.log(resultado2)

    const fin = performance.now()
    console.log(`Ejecucion PRIMER async: ${fin - inicio} ms`)
}
consultarAPI()

// Aquí veremos la mejor manera, es decir, que se ejecuten al mismo tiempo 

const consultarAPI2 = async () => { //async para hacer la función asincrona 
    const inicio = performance.now()

    const [respuesta, respuesta2] = await Promise.all([fetch(url), fetch(url2)]) //Este codigo hace que arranquen al mismo tiempo 

    const resultado = await respuesta.json()
    const resultado2 = await respuesta2.json()

    // console.log(resultado)
    // console.log(resultado2)
    const fin = performance.now()
    console.log(`Ejecucion SEGUNDO async: ${fin - inicio} ms`)

}
consultarAPI2()

// Si ejecutas este codigo con la configuracion de red lenta, verás que la diferencia de tiempo entre la 
// primera funcióon y la segunda es de casi 3 segundos 