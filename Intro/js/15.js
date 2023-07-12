// Condicionales - Ternarios
const autenticado = false
autenticado ? console.log("Autenticado"): console.log("No autenticado")

// Doble ternario 

const saldo = 500 
const pagar = 700 
const tarjeta = false

saldo > pagar ? 
        console.log("Puedes pagar"):
        tarjeta ? console.log("paga con tarjeta"): 
                  console.log("No puedes pagar")



