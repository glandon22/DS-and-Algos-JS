function replaceSpaces(str, len) {
    if (!len) return null;
    else if (!str) return null;
    let arr = str.split('');
    arr = arr.map((x, i) => {
        console.log(i)
        if (i > len - 1) {}
        else if (x == ' ') {
            return '%20';
        }

        else return x;
    });

    return arr.join('');
}

console.log(replaceSpaces('fd df gf     ', 8));