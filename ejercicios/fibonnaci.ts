function fibonacciMemoized(): (n: number) => number {
    const memo = new Map<number, number>();

    const fib = (n: number): number => {
      if (memo.has(n)) {
        return memo.get(n)!;
      }
      if (n <= 0) {
        return 0;
      } else if (n === 1) {
        return 1;
      } else {
        const result = fib(n - 1) + fib(n - 2);
        memo.set(n, result);
        return result;
      }
    };

    return fib;
  }

  const fibonacci = fibonacciMemoized();

  const n = 7;
  console.log(`El número de Fibonacci en la posición ${n} es: ${fibonacci(n)}`);
