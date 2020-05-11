// function solution(N) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   let value = N.toString(2);
//   let counter = 0;
//   let store = [];
//   for (let i=0;i<value.length;i++) {
//       switch(value[i]) {
//           case '0':
//               counter++;
//               break;
//           case '1':
//               store.push(counter);
//               counter = 0;
//               break;
//           default:
//               break;
//       }
//   }
//   return (counter === 0 || store.length > 1) ? Math.max(...store) : 0;
// }
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length > 0) {
    return Math.max(...A) * ((Math.max(...A) + 1)/2) - A.reduce((acc,item) => acc + item);
  } else {
    return 1;
  }

}
var A = [];
console.log(solution(A))

