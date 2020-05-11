var A = [0, 1, 0, 1, 1, 1];
// var A = [];
// A[0] = 0;
// A[1] = 0;
// A[2] = 0;
// A[3] = 1;
// A[4] = 0
// A[5] = 1;

function passingCars(A) {
    var zeroes = 0;
    var ones = 0;
    
    for(var x =0;x<A.length;x++) {
        if(A[x] === 0) {
            zeroes++;
        } else {
            ones++;
        }
    }
    return (zeroes * ones) - 1;

}
console.log(passingCars(A));