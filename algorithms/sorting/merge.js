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

function split(arr) {
    let finalArr = [];
    if (arr[0].length < 1) {
        return arr;
    }
    for (let i = 0; i < arr.length; i++) {
        let midpoint = Math.floor(arr[i].length / 2);
        finalArr.push(arr[i].slice(0, midpoint));
        finalArr.push(arr[i].slice(midpoint));
    }

    return split(finalArr);
}

function mergeSort(arr) {
    let splitArrs = split([arr]);
    while (splitArrs.length > 1) {
        let partial = merge(splitArrs[0], splitArrs[1]);
        splitArrs.splice(0, 2, partial);
    }

    return splitArrs;
}

//console.log(mergeSort([4,7,2,6,3,9,33,6,4,8]));

function mergeSort1(arr) {
    if (arr.length <= 1) return arr;
    let midpoint = Math.floor(arr.length / 2);
    let left = mergeSort1(arr.slice(0, midpoint));
    let right = mergeSort1(arr.slice(midpoint));
    return merge(left, right);
}

console.log(mergeSort1([4,7,2,6,3,9,33,6,4,8]));