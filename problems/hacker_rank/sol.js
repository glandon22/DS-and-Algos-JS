function nonDivisibleSubset(k, s) {
    // Write your code here

  //console.log(s);
    var count1 = 0;
    var map = new Array(k).fill(0);
// add a item
console.log(map);
// map[0] = 0;
for(var i = 0; i <s.length; i++) {
    map[s[i] % k]++;
}
if(map[0] >= 1)
   count1 = 1;
if(k % 2 === 0 && map[k/2] > 1)
    map[k/2] = 1;
    console.log(map);
for ( var i =1 ; i<= k/2 ; i++)
{
count1 = count1 + Math.max(map[i],map[k-i]);
}
  console.log(count1);
    
     
return count1;   
  }

  console.log(nonDivisibleSubset(7, [278,576,496,727,410,124,338,149,209,702,282,718,771,575,436]));