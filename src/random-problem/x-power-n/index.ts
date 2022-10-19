const power = (x: number, n: number): number => {
    if (n === 0) return 1;

    if (x === 0) return 0;
    // return x ** n;

    return x * power(x, n - 1);
};

export default power;
