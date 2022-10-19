const decToBinary = (n: number): number => {
    // To store the binary number
    let B_Number = 0;
    let cnt = 0;
    while (n != 0) {
        const rem = n % 2;
        const c = Math.pow(10, cnt);
        B_Number += rem * c;

        n = parseInt(n / 2);

        // Count used to store exponent value
        cnt++;
    }

    console.log(B_Number);
    return B_Number;
};

export default decToBinary;
