var arr = [1, 2, 1, 3, 2, 3, 5, 6, 5];

function oddOccurences(arr) {
    let result = 0;
    let outputArr = new Map();
    for (let x=0; x < arr.length; x++) {
        if(!outputArr.has(arr[x])) {
            outputArr.set(arr[x], {val: 1});
        } else {
            outputArr.get(arr[x]).val++;
        }
    }
    for (let [key, value] of outputArr.entries()) {
        typeof(value);
        if (value.val % 2 !== 0) {
            result = key;
        }
    }
    return result;
}
console.log(oddOccurences(arr));
