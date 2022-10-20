const minimumNumber = (numbers: number[]): number | undefined => {
    let minNum;
    for (let index = 0; index < numbers.length; index++) {
        if (minNum === undefined) {
            minNum = numbers[index];
        } else {
            minNum = numbers[index] < minNum ? numbers[index] : minNum;
        }
    }

    return minNum;
};

export default minimumNumber;
