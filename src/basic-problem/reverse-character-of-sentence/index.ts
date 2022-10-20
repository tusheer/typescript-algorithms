const reverseCharacterOfSentence = (sentence: string): string => {
    let temSentence = '';

    let temWord = '';

    for (let index = 0; index < sentence.length; index++) {
        if (sentence[index] === ' ') {
            temSentence += temWord + ' ';
            temWord = '';
        } else {
            temWord = sentence[index] + temWord;
        }

        if (index === sentence.length - 1) {
            temSentence += temWord;
            temWord = '';
        }
    }

    return temSentence;
};

export default reverseCharacterOfSentence;
