function areThereDuplicates() {
    let frequency = {};
    for (const arg of arguments) {
        if (frequency[arg]) {
            return true;
        }

        frequency[arg] = 1;
    }

    return false;
}

console.log(areThereDuplicates(1,3,2,1))