function kaprekarNumbers(p, q) {
    const result = [];
    for(let i=p; i<=q;i++) {
        const square = String(Math.pow(i,2));
        let left = parseInt(square.slice(0,square.length/2));
        left = isNaN(left)? 0: left;
        const right = parseInt(square.slice(square.length/2));
      if(left+right==i) {
        result.push(i);
      }
    }
    if(result.length) {
      console.log(result.join(' '))
    }else {
      console.log('INVALID RANGE');
    }
    
  }
  console.log(kaprekarNumbers(1,2));
  