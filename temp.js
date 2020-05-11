// problem regarding seat allocation
S = S.split(" ");
let families = 0;
for (let i = 1;i<=N;i++) {
    if(!S.includes(i+"A") && !S.includes(i+"B") && !S.includes(i+"C")) {
      families++;
    }
    if(!(S.includes(i+"D") && S.includes(i+"G")) && !(S.includes(i+"E") || S.includes(i+"F"))) {
      families++;
    }
    if(!S.includes(i+"H") && !S.includes(i+"J") && !S.includes(i+"K")) {
      families++;
    }
}
return families;


// N = 01;
// let tempAns = N.toString().split('');
// if(tempAns.length === 1) {
//     console.log(parseInt(tempAns.reverse().join('')));
// }

var S = "13+62*7+*";
var stack = [];
S = S.split('').reverse();
var len = S.length;
for(let i=0;i<len;i++) {
  value = S.pop();
    if(Number.isInteger(parseInt(value))) {
        stack.push(value);
    } else if (value == '*'){
        if (stack.length < 2) {
            return -1;
        }
        val1 = stack.pop();
        val2 = stack.pop();
        stack.push(parseInt(val1) * parseInt(val2));
    } else if (value == '+') {
        if (stack.length < 2) {
            return -1;
        }
        val1 = stack.pop();
        val2 = stack.pop();
        stack.push(parseInt(val1) + parseInt(val2));
    } else if (stack.length === 0) {
        return -1;
    } else {
        return -1;
    }
}
return stack.pop();
