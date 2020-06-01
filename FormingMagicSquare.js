function formingMagicSquare(s) {
       
    // flattening matrix into a one dimensional array
    const oneDaray= s.reduce((acc, val) => acc.concat(val), []);
   
let minimumCost = 45;
let all_possible_squares=[
    [2,9,4,7,5,3,6,1,8],
    [4,9,2,3,5,7,8,1,6],
    [6,7,2,1,5,9,8,3,4],
    [8,1,6,3,5,7,4,9,2],
    [6,1,8,7,5,3,2,9,4],
    [8,3,4,1,5,9,6,7,2],
    [4,3,8,9,5,1,2,7,6],
    [2,7,6,9,5,1,4,3,8]

];
for(var i=0;i<all_possible_squares.length;i++){
    let finalArray = oneDaray.map((e,j)=> Math.abs(e-all_possible_squares[i][j]));
    let cost = finalArray.reduce((acc,current)=>acc+current);
    if(cost<minimumCost){
        minimumCost=cost;
    }
}

return minimumCost;

}