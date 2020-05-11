var brackets = {
    '{': '}',
    '(': ')',
    '[':']'
};
var closedbrackets = ['}', ')', ']'];
var S = "()(()()(((()())(()()))";
function CheckNesting (S) {
    var stack = [];
    for (var i=0;i<S.length;i++) {
        if(brackets.hasOwnProperty(S[i])) {
            stack.push(S[i]);
        } else if (brackets[stack[stack.length - 1]] === S[i]) {
            stack.pop();
        } else if (closedbrackets.includes(S[i])) {
            return 0;
        }
    }
    return stack.length === 0 ? 1 : 0;
}
console.log(CheckNesting(S));