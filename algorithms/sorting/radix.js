function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let most = 0;
    for (let i = 0; i < arr.length; i++) {
        let digits = digitCount(arr[i]);
        if (digits > most) {
            most = digits;
        }
    }

    return most;
}

//console.log(mostDigits([1,33,44444,55,665]));

function radix(arr) {
    const maxLength = mostDigits(arr);
    for (let i = 0; i < maxLength; i++) {
        let buckets = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
        for (let j = 0; j < arr.length; j++) {    
            let position = getDigit(arr[j], i);
            buckets[position].push(arr[j]);
        }
        arr = buckets.flat();
    }

    return arr;
}

console.log(radix([11,544,10,33]));