const getLongestString = (strings: string[]) => {
    let longest = '';

    for (let i = 0; i < strings.length; i++) {
        if (longest.length < strings[i].length) {
            longest = strings[i];
        }
    }

    return longest;
};

export default getLongestString;
