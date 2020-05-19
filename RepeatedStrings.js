function repeatedString(s, n) {
    const length = s.length;
    let count = length - s.replace(/a/g, "").length;
    const remainder = n%length;
    const stringinstance = Math.floor(n/length);
    if(remainder) {
      const remainderString = s.slice(0,remainder);
      const remainderCount = remainderString.length - remainderString.replace(/a/g, "").length;
      
      return stringinstance*count + remainderCount;
    }
    return stringinstance*count;
  }
  
  console.log(repeatedString('aba', 10))