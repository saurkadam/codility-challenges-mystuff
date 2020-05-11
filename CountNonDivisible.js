var A = [];
A[0] = 3;
A[1] = 1;
A[2] = 2;
A[3] = 3;
A[4] = 6;
function CountNonDivisible(A) {
    var obj = {};
    var output= [];
    A.map((item) => obj[item] = isPrime(item));
    
    function isPrime(n) {
        return !(Array(n + 1).join(1).match(/^1?$|^(11+?)\1+$/));
    }
    const factors = number => Array
    .from(Array(number + 1), (_, i) => i)
    .filter(i => number % i !== 0);
    A.map((item) => {
        if (item === 1) {
            return;
        }
        if(!obj[item]) {
            output.push(factors(item).length);
        }
    })
    console.log(output);
}
CountNonDivisible(A);
//wrong solution please do not refer.