function encryption(s) {
    if (!s.length) return null;
    s = s.split(" ").join("");
    let sqrt = Math.sqrt(s.length);
    let dimensions = [];
    if (sqrt % 1 == 0) dimensions = [sqrt, sqrt];
    else {
        let sqrtFloored = Math.floor(sqrt);
        if (sqrtFloored * (sqrtFloored + 1) < s.length) dimensions = [sqrtFloored + 1, sqrtFloored + 1];
        else dimensions = [sqrtFloored + 1, sqrtFloored];
    }
    
    let encrypted = ''
    for (let i = 0; i < dimensions[0]; i++) {
        for (let j = i; j < s.length; j += dimensions[0]) {
            encrypted += s[j];
        }
        encrypted += ' ';
    }

    return encrypted;
}

console.log(encryption('iffactsdontfittotheorychangethefacts'));