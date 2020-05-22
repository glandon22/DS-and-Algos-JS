function selection(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        let swapped = false;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j
                swapped = true;
            }
        }

        if (swapped) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }

    return arr;
}

console.log(selection([42, 87, 88, 90, 4, 5, 9, 2, 6, 3, 2]));