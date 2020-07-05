function appendAndDelete(s, t, k) {
    let i=0;
    for(i=0;i<s.length;i++) {
      if(t.charAt(i)) {
        if(s.charAt(i)!==t.charAt(i)){
          break;
        }
      }else {
        break;
      }
    };
    
    const addStr = Math.abs(s.length-i);
    const delStr = Math.abs(t.length-i);
    if(addStr+delStr>k) {
      return 'No';
    }else {
      return 'Yes';
    }
  }