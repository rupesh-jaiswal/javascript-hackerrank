function jumpingOnClouds(c, k) {
    let energy = 100;
    let start = 0;
      do {
        start=(start+k)%c.length;
        if(c[start]) {
            energy-=2;
        }
        
        energy--;
      }while(start%c.length!==0);
    return energy--;
    }
    
    console.log(jumpingOnClouds([0,0,1,0,0,1,1,0], 2))
    console.log(jumpingOnClouds([0,0,1,0], 2))
    console.log(jumpingOnClouds([1,1,1,0,1,1,0,0,0,0], 3))