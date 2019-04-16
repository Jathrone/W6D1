function curriedSum(numArgs) {
    let numbers = [];
    function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            let sum = 0;
            numbers.forEach(function (ele) {
                sum += ele;
            })
            return sum;
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
}

Function.prototype.curry = function (numArgs) {
    totalArgs = [];
    let that = this;
    function _curry(arg) {
        totalArgs.push(arg);
        if (totalArgs.length === numArgs) {
            return that.apply(that, totalArgs);
        } else {
            return _curry;
        }
    }
    return _curry;
}

function sumFour(arg1, arg2, arg3, arg4) {
 return arg1 + arg2 + arg3 + arg4;
}
curry = sumFour.curry(4);
curry(1)(2)(3)(4);