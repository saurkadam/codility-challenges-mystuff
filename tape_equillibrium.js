var A = [3, 1, 2, 4, 3];


function tapeEquillibriumA(A) {
    var tail= 0;
    for (var i =1; i<A.length;i++) {
        tail+=A[i];
    }
    var head = A[0];
    var diff  = Math.abs(head-tail);
    for (var x =1;x<A.length-1;x++) {
        head = head + A[x];
        tail = tail - A[x];
        diff = Math.min(diff, Math.abs(head-tail));
    }
    return diff;        
}

console.time('Function #2');
console.log(tapeEquillibrium(A));
console.timeEnd('Function #2');