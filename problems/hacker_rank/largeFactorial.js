function largeFactorial(n) {
    function addStrings(s1, s2) {
        let diff = Math.abs(s1.length - s2.length);
        if (s1.length < s2.length) {
            let temp = s1;
            s1 = s2;
            s2 = temp;
        }
        let carry = 0;
        let sum = '';
        for (let i = s1.length - 1; i >= 0; i--) {
            let digit = parseInt(s1[i]) + parseInt(s2[i - diff] || 0) + carry;
            if (digit > 9) carry = 1; 
            else carry = 0; 
            digit = digit % 10;
            sum = digit.toString().concat(sum);
        }
        if (carry) {
            sum = '1'.concat(sum);
        }
        return sum;
    }

    let largeNums = [];
    let currProduct = 1;
    let idx = 1;
    while (idx <= n) {
        if (Number.isSafeInteger(currProduct * idx)) currProduct *= idx;

        else {
            largeNums.push(currProduct);
            currProduct = idx;
        }

        idx++;
    }
    //this factorial did not exceed max num size
    if (largeNums.length === 0) {
        console.log('hi')
        return currProduct;
    }

    let result = '0'
    while (currProduct >= 0) {
        console.log(result);
        result = addStrings(result, largeNums[0].toString());
        
        currProduct--;
    }
    return result;
} 
largeFactorial(21)
//console.log(largeFactorial(19));
//121645100408832000
//7825123416689250287616000