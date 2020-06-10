function isUnique(str) {
    let letters = {};
    let pointer = 0;
    while (pointer < str.length) {
        if (letters[str[pointer]]) {
            return false;
        }

        letters[str[pointer]] = 1;
        pointer++;
    }

    return true;
}

console.log(isUnique('asdfghjkl'))