/*#########################################
#                 Ejercicio 4             #
#########################################*/

//Desarrollado por:Daniel Felipe Diaz Sanchez

//Lista de numeros pares
let pares = []
//Lista de numeros impares
let impares = []
//Suma de pares
let sumapares = 0
//Suma de impares
let sumaimpares = 0

for (let i = 1; i <= 578934; i++) {
    if(i% 2 == 0) {
        pares.push(i)
        sumapares += i
    }
    else if(i % 2 != 0) {
        impares.push(i)
        sumaimpares += i
    }
}

console.log(sumapares)
console.log(sumaimpares)