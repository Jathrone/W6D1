function sum() {
    let args = Array.from(arguments);
    let acc = 0;
    args.forEach(function (ele) {
        acc += ele;
    });
    return acc;
}

function sum2(...args) {
    let acc = 0;
    args.forEach(function (ele) {
        acc += ele;
    });
    return acc;
}

