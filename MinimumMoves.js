function minimumMoves(s, d) {
    let str=s.split('');
      // Write your code here
    let count=0;
    for(let i=0;i<=s.length-d;i++) {
      if(!str.slice(i,i+d).includes("1")) {
        count++;
        str.splice(i+d-1,1, "1");
        //str[i+d-1]="1";
        
      }
    }
    return count;
      
  
  }
  
  console.log(minimumMoves("00100",2));