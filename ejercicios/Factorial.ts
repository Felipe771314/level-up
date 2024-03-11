function factorial(n: number): number {
    return (n <= 1) ? 1 : n * factorial(n - 1);
}

const result = factorial(5);
console.log(`El factorial de 5 es: ${result}`);
