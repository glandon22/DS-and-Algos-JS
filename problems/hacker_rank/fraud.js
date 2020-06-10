function compareNumbers(a, b) {
    return a - b;
  }

function fraud(spending, days) {
    if (days >= spending.length) return null;

    let pointer = days;
    let notifications = 0;
    let median = {
        val: 0,
        spread: mergeSort(spending.slice(0, days)),
        unsorted: spending.slice(0, days)
    }

    median.val = days % 2 != 0 ? median.spread[Math.floor(median.spread.length / 2)] : (median.spread[median.spread.length / 2] + median.spread[(median.spread.length / 2) - 1]) / 2;

    console.log(median);

    while (pointer < spending.length) {
        if (spending[pointer] >= median.val * 2) notifications++;
        median.unsorted.shift();
        median.unsorted.push(spending[pointer]);
        median.spread = mergeSort(median.unsorted);
        median.val = days % 2 != 0 ? median.spread[Math.floor(median.spread.length / 2)] : (median.spread[median.spread.length / 2] + median.spread[(median.spread.length / 2) - 1]) / 2
        pointer++;
    }

    return notifications;
}

console.log(fraud([2,3,4,2,3,6,8,4,5], 5));

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return mergeUtil(left,right);
}

function mergeUtil(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        }

        else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}
