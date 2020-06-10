/**
 * https://www.hackerrank.com/challenges/plus-minus/problem
 */

 function plusMinus(arr) {
     let zero = 0;
     let pos = 0;
     let neg = 0;
     arr.forEach(element => {
         if (!element) zero++;
         else if (element > 0) pos++;
         else neg++;
     });
     pos = parseFloat((pos/arr.length).toFixed(6));
     neg = parseFloat((neg/arr.length).toFixed(6));
     zero = parseFloat((zero/arr.length).toFixed(6));

     console.log([pos, neg, zero]);
 }

 console.log(plusMinus([ -4, 3, -9, 0, 4, 1 ]));