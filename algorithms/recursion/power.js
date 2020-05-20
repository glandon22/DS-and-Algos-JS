function power(num, exp){
    if (exp == 0) return 1;

    function helper(base, exponent) {
        if (exponent == 1) {
            return base;
        }
        return base * helper(base, exponent - 1);
    }

    return helper(num, exp);
}

console.log(power(3,3));