function fib(num){
    if (num == 1 || num == 2) return 1;
    function helper(offset1, offset2, number) {
        if (number == 0) return offset1;
        return helper(offset1 + offset2, offset1, number - 1);
    }

    return helper(1, 1, num - 2);
}

console.log(fib(35));