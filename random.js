function Summation () {
    var A = [2];
    var max = Math.max(...A);
    return max > 0 ? (max * (max+1)) / 2 - [...new Set(A)].reduce((acc, item) => acc + item) !== 0 ? 
    (max * (max+1)) / 2 - [...new Set(A)].reduce((acc, item) => acc + item) : 1
    : 1;
}
console.log(Summation());


function checkPermutation() {
    var max = Math.max(...A);
    return (max * (max + 1)/2) - [...new Set(A)].reduce((acc, item) => acc + item) !== 0 ? true : false;
}