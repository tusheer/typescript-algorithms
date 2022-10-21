const isPalinNumber = (number: number): boolean => {
    const stingVersionNumber = number.toString();
    for (let index = 0; index < stingVersionNumber.length / 2; index++) {
        const firstPoint = stingVersionNumber[index];
        const secondPoint = stingVersionNumber[stingVersionNumber.length - 1 - index];

        if (firstPoint !== secondPoint) {
            return false;
        }
    }

    return true;
};
export default isPalinNumber;
