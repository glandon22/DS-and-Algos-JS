function compressString(str) {
    let compressed = '';
    let pointer = 0;
    let dupeCount = 0;

    while (pointer < str.length) {
        if (pointer == 0) {
            compressed += str[pointer];
        }

        else if (str[pointer] != str[pointer - 1]) {
            compressed += dupeCount.toString();
            compressed += str[pointer];
            dupeCount = 0;       
        }
        dupeCount++;
        pointer++;
    } 

    compressed += dupeCount.toString();
    return compressed.length < str.length ? compressed : str;
}

console.log(compressString('aaabsssddffghhhHHH'));