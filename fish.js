var A=[];
var B=[];
A[0] = 4;    B[0] = 0;
A[1] = 3;    B[1] = 1;
A[2] = 2;    B[2] = 0;
A[3] = 1;    B[3] = 0;
A[4] = 5;    B[4] = 0;
//0-upstreaam 1-downstream
// indexofFishA > indexofFishB && valueofFishA > valueoffishB
function solution(A, B) {
    var upstream = [];
    var downstream = [];
    for (var i=0;i<A.length;i++) {
        dir = B[i];
        if(dir === 0) {
            while(downstream.length > 0) {
                d = downstream.pop();
                if(d > A[i]) {
                    downstream.push(d);
                    break;
                }
            }
            if(downstream.length === 0) {
                upstream.push(A[i]);
            }
        } else {
            downstream.push(A[i]);
        }
    }
    return upstream.length + downstream.length;
}
console.log(solution(A,B));