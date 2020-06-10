function checkPermutation(str1, str2) {
    if (str1.length != str2.length) return false;
    else if (str1.length == 0 && str1.length == 0) return false;

    let letters1 = {};
    let letters2 = {};
    for (let i = 0; i < str1.length; i++) {
        letters1[str1[i]] = letters1[str1[i]] + 1 || 1;
    }

    for (let j = 0; j < str1.length; j++) {
        letters2[str2[j]] = letters2[str2[j]] + 1 || 1;
    }

    for (prop in letters1) {
        if (!letters2[prop] || letters2[prop] != letters1[prop]) return false;
    }

    return true;
}

console.log(checkPermutation('', 'aaaa'));