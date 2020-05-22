function naiveString(str, subStr) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == subStr[0]) {
            for (let j = 0; j < subStr.length; j++) {
                if (str[i + j] != subStr[j]) {
                    break;
                }

                else if (j == subStr.length - 1) {
                    counter++;  
                }
                
            }
        }
    }

    return counter;
}

console.log(naiveString('hello', 'ell0'));