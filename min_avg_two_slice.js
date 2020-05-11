var A = [4,5,1,2,2,5,8];
// A[0] = 4;
// A[1] = 2;
// A[2] = 2;
// A[3] = 5;
// A[4] = 1;
// A[5] = 5;
// A[6] = 8;
function solution(A) {
    var start = 0;
 
    var currentSum = A[0] + A[1];
    var minAvgSlice = currentSum / 2;
    for (var i=2; i<A.length; i++) {
       currentSum += A[i];
       var newAvg = currentSum / 3;
       if (newAvg < minAvgSlice) {
          minAvgSlice = newAvg;
          start = i-2;
       }
 
       currentSum -= A[i-2];
       newAvg = currentSum / 2;
       if (newAvg < minAvgSlice) {
          minAvgSlice = newAvg;
          start = i-1;
       }
    }
 
    return start;
 }
 console.log(solution(A));