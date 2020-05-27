function minimumSwaps(arr) {
    let swaps = 0;
    let unsortedArray = [...arr];
      
    unsortedArray.forEach((e,index) => {
      if(index!=e-1) {
        const temp = unsortedArray[e-1];
        unsortedArray[e-1] = e;
        unsortedArray[index] = temp;
        swaps++;
      }
      
      for(let i=index-1;i>=0;i--) {
        if(i!==unsortedArray[i]-1) {
         const temp = unsortedArray[unsortedArray[i]-1];
         unsortedArray[unsortedArray[i]-1] = unsortedArray[i];
         unsortedArray[i] = temp;
         swaps++;
        }
      }
    });
    return swaps;
  }