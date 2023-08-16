
// Código adaptado por [Tu Nombre] basado en el ejemplo de Daniel Díaz

const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

// Obtener el primer input
rl.question('Ingresa el primer número: ', (input1) => {
// Obtener el segundo input
rl.question('Ingresa el segundo número: ', (input2) => {
    // Convertir los inputs a números
    const numero1 = parseFloat(input1);
    const numero2 = parseFloat(input2);

    // Verificar si los inputs son números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
    console.log('Ingresa valores numéricos válidos.');
    } else {
    // Realizar operaciones o aplicar condiciones
    if (numero1 > numero2) {
        console.log(`${numero1} es mayor que ${numero2}.`);
    } else if (numero1 < numero2) {
        console.log(`${numero1} es menor que ${numero2}.`);
    } else {
        console.log('Los números son iguales.');
    }
    }

    // Cerrar la interfaz
    rl.close();
});
});
