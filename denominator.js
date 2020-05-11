
var A = [];
A[0] = 3;    A[1] = 4;    A[2] =  3;
A[3] = 2;    A[4] = 3;    A[5] = -1;
A[6] = 3;    A[7] = 3;
function denominator(A) {
    var obj={};
    A.map((item) => {
        if(obj.hasOwnProperty(item)) {
            obj[item]++;
        } else {
            obj[item] = 1;
        }
    });
    value = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
    return value;
}
console.log(denominator(A));