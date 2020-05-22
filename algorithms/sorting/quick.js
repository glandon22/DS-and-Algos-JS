function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
  }

function quick(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pIndex = pivot(arr, left, right);
        //left
        quick(arr, left, pIndex - 1);
        //right
        quick(arr, pIndex + 1, right);
    }
    return arr;
}

console.log(quick([4, 7, 99, 8, 2, 9, 1]));