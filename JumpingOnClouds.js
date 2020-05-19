function jumpingOnClouds(c) {
    let i = 0;
    let steps = 0;
    while(i!=(c.length-1)) {
      if((i+2)<c.length && !c[i+2]) {
        i+=2;
        steps++
      }else if((i+1)<c.length) {
        i+=1;
        steps++
      }
    }
    return steps;
    }
console.log(jumpingOnClouds([0,0,0,0,1,0]));