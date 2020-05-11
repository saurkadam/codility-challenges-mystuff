// cyclic rotation
function cyclicrotation(A,K) {
    if(A.length > 1) {
        for(let x=0; x<K;x++) {
            A = [A.pop(), ...A];
        }
        return A;        
    } else {
        return A;
    }
}
console.time('Function #1');
console.log(cyclicrotation(3,[1,2,3,4,5,6]));
console.timeEnd('Function #1');