function getArrangements(a,b) {
    for(let i=0;i<a.length-1;i++) {
      if(a[i+1]<b[i]) {
        return "NO";
      }
    }
    return "YES";
  }
  
  function arrangeStudents(a, b) {
      // Write your code here
    if(Math.abs(a.length-b.length)>1) {
      return "NO";
    }else {
      a.sort((a,b)=>a-b);
      b.sort((a,b)=>a-b);
      if(JSON.stringify(a)===JSON.stringify(b)) {
          return "Yes";
      }
      if(a.length>b.length) {
     
        if(a[0]>b[0] || a[a.length-1]<b[b.length-1]) {
            return "NO"
        }
        return getArrangements(b,a);
      }else if(b.length>a.length) {
     
        if(b[0]>a[0] || b[b.length-1]<a[a.length-1]) {
            return "NO"
        }
        return getArrangements(a,b);
      } else {
          if(a[0]<b[0])
            return getArrangements(a,b)
          else {
              return  getArrangements(b,a)
          }
      }
    }
  }
  
  console.log(arrangeStudents("00100",2));