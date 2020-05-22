function bubble(arr) {
    //start a loop
    //check if first val is greater than second val
        //if true, swap vals
        //else check next pair
    //once reaching the end, increment loop count by 1
    let swaps = 1;
    let i = 0;
    while (swaps > 0) {
        swaps = 0;
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swaps++;
            }
        }
        i++;
    }

    return arr;
}

console.log(bubble([777, 787, 797, 1, 4, 8, 03, -7979]));