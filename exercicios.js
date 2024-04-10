// # developed by: Camilla Sarmento

// 1. ENTRADA DISCOTECA - A la entrada a una discoteca, se pregunta al cliente qué edad tiene. Darle una respuesta diferente si
// la edad es mayor, menor o igual a 18 años.
let result;
let edad = 20;

if ( edad > 18 ) {
    result = 'Puedes entrar';
} else if (edad = 18) {
    result = 'Ahora sí puedes entrar'
} else {
    result = 'No puedes entrar';
}

document.getElementById('output').innerHTML = result;


//2 - CINCO COLORES
// Se le pide al usuario que escoja un color (azul, verde, rojo, amarillo y violeta) y darle una respuesta en relación al color elegido.
// Ejemplo: 'el azul es como el mar, siempre que el cielo sea azul (y sea de día)'. Dar otra respuesta en el caso que NO elija ninguno
// de los colores anteriores.

const select = document.querySelector('select');
constparrafo = document.querySelector('p');

select.addEventListener('change', setColor);

function setColor() {
    const choice = select.value;

    switch (choice) {
        case 'azul':
            parrafo.textContent =
                'el azul es como el mar, siempre que el cielo sea azul (y sea de día)';
            break;
        case 'verde':
            parrafo.textContent =
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.';
            break;
        case 'rojo':
            parrafo.textContent =
                'tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.';
            break;
        case 'amarillo':
            parrafo.textContent =
                'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
            break;
        case 'violeta':
            parrafo.textContent =
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.';
            break;
        default:
            parrafo.textContent = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt';
    }
}

//3- LAMPARA NO ENCIENDE - Hacer 2 preguntas prompt (si/no). Se puede anidar doscondicionales (uno dentro de otro). Crear el código
// con condicionales para el algoritmo representado por el siguiente diagrama de flujo:
if (!enchufada) {
    console.log('Enchufarla');
} else if (focoQuemado) {
    console.log('Reemplazar el foco');
} else {
    console.log('Comprar nueva lámpara');
}