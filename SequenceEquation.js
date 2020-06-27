function permutationEquation(p) {
    const zeroIndexArray = p.map(e => e-1);
    return zeroIndexArray.map((e,i) => {
      const actualIndex = zeroIndexArray.indexOf(i);
      if(actualIndex===i) {
        return i+1;
      }
      
     return zeroIndexArray.indexOf(actualIndex)+1;
      
    });
  }
  
  console.log(permutationEquation([2,3,1]))