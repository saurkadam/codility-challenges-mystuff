function countDiv(A,B,K) {
    var countDiv = 0;
    for (var x = A; x<=B; x++) {
        if(x%K === 0) {
            countDiv++;
        }
    }
    return countDiv;
}
console.log(countDiv(3, 10, 5));