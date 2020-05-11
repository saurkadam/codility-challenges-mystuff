function kadane(A) {
    var sum = 0;
    var ans = 0;
    for(var i=0;i<A.length;i++) {
        ans = Math.max(0, ans+A[i]);
        sum = Math.max(sum, ans);
        if(A[i] === 1) {
            console.log("change");
        }
        console.log(sum, ans);
    }
    return sum;
}
var A = [1, 2, 6, -4, 3, -5, 1, 3, 6, 7];
console.log(kadane(A));