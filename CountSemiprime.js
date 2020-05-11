
// wrong output wrong solution

function countSemiPrime(A, B) {
    var startLen = A;
    var endLen = B;
    var count = 0;


    for(let x = startLen; x<=endLen; x++) {
        const cond = (!(x === 1) && (!isPrime(x)));
        const value = isSemiPrime(x);
        if(cond && value < 3) {
            console.log(x);
            count++;
        }
    }
    function isSemiPrime(n) {
        var res = false;
        const factors = number => Array
        .from(Array(number), (_, i) => i)
        .filter(i => (number % i === 0 && i !==1));
        var result = factors(n);
        if (result.length > 0) {
            res = result.filter((item) => {
                if(!isPrime(item)) {
                    return true;
                }
            });
        } else {
            return 4;
        }
        return !res ? result.length : 4;
    }
    function isPrime(n) {
        return !(Array(n + 1).join(1).match(/^1?$|^(11+?)\1+$/));
    }
    return count;
}
console.log(countSemiPrime(1,26));