function hourglassSum(arr) {
    const sum = [];
      for(let i=0;i<Math.floor(arr.length/2+1);i++) {
        for(let j=0; j<Math.floor(arr.length/2+1);j++) {
          let temp=0;
          for(let k=i;k<i+3;k++) {
            for(let l=j;l<j+3;l++) {
              if(!(k==(i+1) && (l==(j) || l==(j+2)))) {
                temp+=arr[k][l];
              }
            }
          }
          sum.push(temp);
        }
      }
      return Math.max(...sum);
    }
    
    const arr = [
      [1,1,1,0,0,0],
      [0,1,0,0,0,0],
      [1,1,1,0,0,0],
      [0,0,2,4,4,0],
      [0,0,0,2,0,0],
      [0,0,1,2,4,0],
    ]
    const arr1 = [
    [-9,-9,-9,1,1,1],
    [0,-9,0,4,3,2],
    [-9,-9,-9,1,2,3],
    [0,0,8,6,6,0],
    [0,0,0,-2,0,0],
    [0,0,1,2,4,0]]
    console.log(hourglassSum(arr1));
    