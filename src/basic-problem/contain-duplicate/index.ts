const containDuplicate = (numbers: number[]): boolean => {
    const hashMap: { [key: number]: number } = {};

    for (let index = 0; index < numbers.length; index++) {
        if (hashMap[numbers[index]] === numbers[index]) {
            return true;
        }

        hashMap[numbers[index]] = numbers[index];
    }

    return false;
};

export default containDuplicate;
