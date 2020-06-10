function merge(arr1, arr2) {
    let merged = [];
    let first = 0;
    let second = 0;
    while (first < arr1.length && second < arr2.length) {
        if (arr1[first] < arr2[second]) {
            merged.push(arr1[first]);
            first++;
        }

        else {
            merged.push(arr2[second]);
            second++;
        }
    }

    while (first < arr1.length) {
        merged.push(arr1[first]);
        first++;
    }

    while (second < arr2.length) {
        merged.push(arr2[second]);
        second++;
    }

    return merged;
}

function mergeSort1(arr) {
    if (arr.length <= 1) return arr;
    let midpoint = Math.floor(arr.length / 2);
    let left = mergeSort1(arr.slice(0, midpoint));
    let right = mergeSort1(arr.slice(midpoint));
    return merge(left, right);
}

console.log(mergeSort1([4,7,2,6,3,9,33,6,4,8]));