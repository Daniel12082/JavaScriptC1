/*##############################################
#            Reto numeros ramdom               #
##############################################*/

//Desarrolado por: Daniel Felipe Diaz Sanchez
array = []
const start = () =>{
    for (let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * 10);
        array.push(randomNumber);
    }
    return array
}
const print = (array) =>{
    for (let i = 0; i < 10; i++) {
        console.log( `Index ${i} Numero ${array[i]}` );
    }
}
start()
print(start())
