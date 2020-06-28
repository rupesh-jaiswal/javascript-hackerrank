function findDigits(n) {
    let count = 0;
    let dividend = n;
    const digits = String(n).split('').map(e => parseInt(e,10));
    digits.forEach((digit) => {
        if(dividend%digit ===0) {
            count++;
        }
    });
    return count;
}