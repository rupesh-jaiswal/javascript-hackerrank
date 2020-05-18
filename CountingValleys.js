
/*
returns the no of valleys been trecked based on path String
*/

function countingValleys(s) {
    let count=0;
    let start = false;
    let level = 0;
    s.split('').forEach(function(e) {
        if(e=='D') {
            if (level<=0) {
            start=true;
            }
            level--;
        } else {
            level++;
        }
        if(level===0 && start) {
            count++;
            level=0;
            start=false;
        }
    })
    return count;
}
console.log(countingValleys('UDDDUDUU'));