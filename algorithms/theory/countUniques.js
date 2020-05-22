function countUniqueValues(arr){
    let p1 = 0;
    let p2 = 1;

    if (arr.length <= 1) {
        return arr.length;
    }

    while (p2 < arr.length) {
        if (arr[p1] === arr[p2]) {
            p2++;
            continue;
        }

        else {
            p1++;
            arr[p1] = arr[p2];
            p2++;
        }
    }

    return p1 + 1;
  }

  console.log(countUniqueValues([1,2,3,4,5,5,6,6,6,6,7,9,10,11,11,11,11,11,11]))