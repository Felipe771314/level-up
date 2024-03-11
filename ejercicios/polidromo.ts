function esPalindromo(cadena: string): boolean {
    const cadenaNormalizada = cadena.toLowerCase().replace(/\s/g, '');
    return verificarPalindromo(cadenaNormalizada);
}

function verificarPalindromo(cadena: string): boolean {
    if (cadena.length <= 1) {
        return true;
    }
    if (cadena[0] !== cadena[cadena.length - 1]) {
        return false;
    }
    return verificarPalindromo(cadena.slice(1, -1));
}


const cadena1 = "radar";
console.log(`¿"${cadena1}" es un palíndromo? ${esPalindromo(cadena1)}`);

const cadena2 = "anita lava la tina";
console.log(`¿"${cadena2}" es un palíndromo? ${esPalindromo(cadena2)}`);

const cadena3 = "perro";
console.log(`¿"${cadena3}" es un palíndromo? ${esPalindromo(cadena3)}`);
