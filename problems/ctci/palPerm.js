function palPerm(str) {
    if (!str) return null;
    let arr = str.split('');
    let letters = {};
    arr = arr.filter(char => char !== ' ');
    arr.forEach(letter => {
        let lowerCaseLetter = letter.toLowerCase();
        letters[lowerCaseLetter] = letters[lowerCaseLetter] + 1 || 1;
    });
    let existingOdd = false;
    console.log('ls',letters)
    for (letter in letters) {
        if (letters[letter] % 2 === 0) continue;
        else if (existingOdd) return false;
        else existingOdd = true;
    }

    return true;
}

console.log(palPerm('abzbzba'));