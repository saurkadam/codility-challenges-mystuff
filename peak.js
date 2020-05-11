var A = [1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2];
function flag(A) {
    var n = A.length;
    console.log(n);
    var peaks = [];
    
    for (var i = 1; i < n - 1; i++) {
        if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
            peaks.push(i);
        }
    }
    console.log(peaks);
    var index = 0;
    var k = parseInt(Math.sqrt(peaks[peaks.length - 1] - peaks[0])) + 1;
    var flags_left = k;
    var number_of_steps_to_jump = k;
    var flag_count = 0;
    while (flag_count <= k) {
        if(peaks.includes(index)) {
            number_of_steps_to_jump = k-1;
            flags_left--;
            flag_count++;
            console.log(flags_left, flag_count);
            index = index + number_of_steps_to_jump;
        }
        if (index > A.length) {
            break;
        }
        index++;
    }
    console.log(flag_count);
    return flag_count;
}

console.log(flag(A));