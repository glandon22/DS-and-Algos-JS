function checkSubstring(str) {
    if (!str) return 0;
    else if (str.length == 1) return 1;
    let letters = {};
    let max = 0;
    let start = 0;
    let pointer = 0;
    while (pointer < str.length) {
        if (letters[str[pointer]] > start) {
            max = Math.max((pointer - start), max);
            start = letters[str[pointer]] + 1;
        }

        else letters[str[pointer]] = pointer;
        pointer++;
    }

    return Math.max((pointer - start), max);
}

console.log(checkSubstring('zcsasdergthyuuioplol'))