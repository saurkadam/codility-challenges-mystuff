var A = [];
A[0] = 10;    A[1] = 2;    A[2] = 5;
A[3] = 1;     A[4] = 8;    A[5] = 20;
function solution(A) {
    var B = [...A];
     B.sort((a, b) => (a - b))
    
    for (var i = 0; i < B.length - 2; i++) {
        var p = B[i],
            q = B[i + 1],
            r = B[i + 2]

        if (p + q > r ) {
                var arr = [];
                A.map((item,index) => {
                    if(item === p ||item === q||item === r) {
                        arr.push(index);
                    }
                })
                return arr;
            }
            
    }
    
    return 0
}
console.log(solution(A));