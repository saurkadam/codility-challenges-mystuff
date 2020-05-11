var myMap = {};

function maxCounter(A, N) {
    for (var x=1;x<=N;x++) {
        myMap[x] = 0; 
    }
    A.map((item) => {
        if(myMap.hasOwnProperty(item)) {
            myMap[item]++;
        } else {
            setALLValues(myMap, Math.max(...Object.values(myMap)));
        }
    })
    return [...Object.values(myMap)];
}
function setALLValues(myMap, max) {
    Object.keys(myMap).map((item) => {
        myMap[item] = max;
    });
}
console.log(maxCounter([3,4,4,6,1,4,4],5));