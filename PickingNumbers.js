function pickingNumbers(a) {
    // Write your code here
  a.sort((a,b) => a-b);
  let max=0;
  for(let i=0;i<a.length-1;i++) {
    let count = 1;
    for(let j=i+1;j<a.length;j++) {
      if(a[j]-a[i] <2) {
        count++;
      }
    }
    max = count>max? count: max;
  }
  return max;
}
console.log(pickingNumbers([1,1,2,2,4,4,5,5,5]));
console.log(pickingNumbers([4,6,5,3,3,1]));