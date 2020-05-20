function maxSubarraySum(arr, subArr){
    if (subArr > arr.length) {
        return null;
    }

    else if (subArr == 1) {
        return Math.max(...arr);
    }

    let maxSum = -Infinity;
    let tempSum = 0;
    for (let i = 0; i < subArr; i++) {
        tempSum += arr[i];
    }

    for (let j = subArr; j < arr.length; j++) {
        tempSum = tempSum - arr[j - subArr] + arr[j];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2));