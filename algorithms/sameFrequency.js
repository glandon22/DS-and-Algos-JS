function sameFrequency(n1, n2) {
    const s1 = n1.toString();
    const s2 = n2.toString();
    if (s1.length !== s2.length) {
        return false;
    }

    let count = {}
    for (const char of s1) {
        count[char] = ++count[char] || 1;
    }

    for (const char1 of s2) {
        if (count[char1]) {
            count[char1]--;
        }

        else {
            return false;
        }
    }

    return true;
}

console.log(sameFrequency(0,0));