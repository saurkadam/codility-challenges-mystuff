var A = [1, 2, 1, 1, 2, 1];
// A[0] = 4;
// A[1] = 3;
// A[2] = 4;
// A[3] = 4;
// A[4] = 4;
// A[5] = 2;
// [[4],[4,3],[4,3,4],[4,3,4,4],[4,3,4,4,4],[4,3,4,4,4,2]]
function equileader(A) {
    var counter = 0;
    A.map((item, index) => {
        var y = false;
        var x = false;
        if (index < A.length - 1) {
            var SpliceOne = [...A];
            var SpliceTwo = [...A];
            var b = SpliceOne.splice(0,index+1);
            var c = SpliceTwo.splice(index + 1, A.length);
            var value1 = calculateDuplicates(b);
            var value2 = calculateDuplicates(c);
            console.log(value1, value2);
            if (value1) {
                highestValue1 = Object.keys(value1).reduce((a, b) => value1[a] > value1[b] ? a : b);
            }
            if (value2) {
                highestValue2 = Object.keys(value2).reduce((a, b) => value2[a] > value2[b] ? a : b);
            }
            console.log(value1[highestValue1], b.length/2);
            if (value1[highestValue1] > (b.length/2) && value1 && highestValue1 === highestValue2) {
                x = true;
            }
            console.log(value2[highestValue2], c.length/2);
            if (value2[highestValue2] > (c.length/2) && value2 && highestValue1 === highestValue2) {
                y=true;
            }
            if (x && y){
                counter++;
                console.log(counter);
            }

        }
    });
    function calculateDuplicates(valueArr) {
        let obj = {};
        if (valueArr.length === 1) {
            obj[valueArr[0]] = 1;
            return obj;
        }
        if(valueArr.length > 1) {
            valueArr.map((item) => {
                if(!obj.hasOwnProperty(item)) {
                    obj[item] = 1;
                } else {
                    obj[item]++;
                }
            });
        }
        return obj;
    }
    return counter;
}
console.log(equileader(A));