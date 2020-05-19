function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
  
  keyboards = keyboards.sort((a, b) => (a-b)); //asc
  drives = drives.sort((a, b) => (b-a));  //desc
  let i=0;
  let j=0;
  let max = -1;
  while(i!=keyboards.length && j!=drives.length) {
   const sum = keyboards[i]+drives[j];
   if(sum > b){
       if(j<(drives.length)) j++;
   }
    else if(sum<b) {
      if(sum>max) max=sum;

      if(i<(keyboards.length)) i++;
    } else {
      return b;
    }
  }
return max;
}