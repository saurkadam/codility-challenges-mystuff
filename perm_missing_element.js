var A=[2 ,3 ,1 ,5];

function calculate(A) {
    let result = A.length +1;
    for(let x = 0;x<A.length;x++) {
        result^= (x+1) ^ A[x];
    }
    return result;
}

console.time('Function #1');
console.log(calculate(A));
console.timeEnd('Function #1');
