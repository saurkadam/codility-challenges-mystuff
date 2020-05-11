// Try edit message
function solution(X, A) {

    let holdValues = new Set();
    for(i=0;i<A.length;i++) {
        holdValues.add(A[i]);
        if(holdValues.size == X)return i;
    }

    return -1;

}
// // testcase 1
// var X = 5
// var A = [1 ,3 ,1 ,4 ,2 ,3, 5, 4]
// console.log(solution(X , A))

// // testcase 2
// X = 2
// A = [2 ,2 ,2 ,2]
// console.log(solution(X , A))

// testcase 3
// X = 3
// A = [1, 3, 1, 3, 2, 1, 3]
// console.log(solution(X , A))

// testcase 4
X = 3
A = [1,2,3]
console.log(solution(X , A))