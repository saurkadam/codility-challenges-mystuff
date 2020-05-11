var A=[2 ,3 ,1 ,5];
function calculate(A) {
    var res = 0;
    for (var i=1;i<=Math.max(...A);i++) {
        res = res + i;
    }
    return res - A.reduce((acc,item) => acc+item);
}
// function calculate() {
//     result = A.len + 1;
//     for (var x=0;x<A.length;x++) {
//         result ^= (x+1) ^ A[x];
//     }
//     return result;
// }

console.time('Function #1');
console.log(calculate(A));
console.timeEnd('Function #1');
