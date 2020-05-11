var Stack = [8, 8, 5, 7, 9, 8, 7 ,4, 8];

function StoneWall(Stack) {
    var stack = [0];
    var blocks = [];
    for (var i=0; i<Stack.length;i++) {
        
        if (stack.length < 2) {
            stack.push(Stack[i]);
            pushBlock();
        } else {
            if(Stack[i] <=  stack[stack.length - 1]) {
                changeStack(Stack[i]);
            } else {
                stack.push(Stack[i]);
            }
            pushBlock();
        }

    }
    function pushBlock() {
        if  (blocks.length === 0) {
            blocks.push([stack[stack.length-2], stack[stack.length-1]]);
        } else {
            blocks.find((item) => {
                var conditions = ((item.toString() !== [stack[stack.length-2], stack[stack.length-1]].toString()) && (stack[stack.length-2] !== stack[stack.length-1]));
                if (conditions) {
                    blocks.push([stack[stack.length-2], stack[stack.length-1]]);
                    return true;
                }
            })
        }

    }
    function changeStack(index) {
        stack.pop();
        stack.push(index);
    }
    return blocks.length;
}
console.time('Function #1');
console.log(StoneWall(Stack));
console.timeEnd('Function #1');