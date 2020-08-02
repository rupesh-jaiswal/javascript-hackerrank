function squares(a, b) {
    let squares = 0;
      let startingNumber = Math.floor(Math.sqrt(a));
      if(Math.sqrt(a)===startingNumber) {
        squares++;
      }
      startingNumber++;
      while(Math.pow(startingNumber,2)<=b) {
        startingNumber++;
        squares++;
      }
      return squares;
    }