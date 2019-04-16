function curriedSum(numArgs){
    let numbers = [];
    function _curriedSum(num){
        numbers.push(num);
        if (numbers.length === numArgs) {
            let sum = 0;
            numbers.forEach(function(ele){
                sum+=ele;
            })
            return sum;
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
}


