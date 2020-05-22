function binary(arr,val) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((right + left) / 2);
    while (left <= right) {
        middle = Math.floor((right + left) / 2);
        if (arr[middle] == val) {
            return middle;
        }

        else if (arr[middle]  < val) {
            left = middle + 1;
        }

        else {
            right = middle - 1;
        }
    }

    return -1;
}

console.log(binary([1,2,3,4,5], -25));