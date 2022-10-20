const decToBinary = (n: number): number => {
    let bin = 0;
    let rem,
        i = 1;

    while (n != 0) {
        rem = n % 2;
        const devidedByTow = n / 2;
        n = parseInt(devidedByTow.toString());
        bin = bin + rem * i;
        i = i * 10;
    }

    return bin;
};

export default decToBinary;
