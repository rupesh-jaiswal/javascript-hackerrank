function saveThePrisoner(n, m, s) {
  
    let warn = s;
    const result = [];
    for(let i=0;i<m;i++) {
      if(warn>n) {
        warn=1;
      }
      result.push(warn++);
    }
  return result[result.length-1];
  
  }
  console.log(saveThePrisoner(5,2,1));