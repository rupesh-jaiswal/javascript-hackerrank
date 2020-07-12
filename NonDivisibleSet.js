function nonDivisibleSubset(k, s) {
    // Write your code here
  //s= Array.from(new Set(s));
  const remainders = new Array(k).fill(0);
  let count = 0;
  s.forEach((e) => {
   remainders[e%k]++; 
  });
  for(let i=1;i<=k/2;i++) {
    if(i===k-i) {
      count++;
      continue;
    }
    count+=Math.max(remainders[i], remainders[k-i]);
  }
  
  if(remainders[0]>0) {
    count++;
  }
  return count;

}
const s= '278 576 496 727 410 124 338 149 209 702 282 718 771 575 436'.split(' ').map(Number);
console.log(nonDivisibleSubset(7,s));