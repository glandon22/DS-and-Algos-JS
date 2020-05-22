function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j];
            arr[j] = current;
        }
    }

    return arr;
}

console.log(insertion([4, 3, 2, 1]));