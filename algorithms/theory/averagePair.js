function averagePair(arr, avg){
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const currAvg = (arr[left] + arr[right]) / 2;
        if (currAvg == avg) {
            return true;
        }

        else if (currAvg > avg) {
            right--;
        }

        else {
            left++;
        }
    }

    return false;
}

console.log(averagePair([-1,1, 3], 2));