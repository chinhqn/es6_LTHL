function caculate(action, ...values) {
    // console.log(values);
    let result = 0;
    switch (action) {
        case '+':
            for (let value of values) result += value;
            break;
        case '-':
            for (let value of values) result -= value;
            result = result + values[0];
            break;
    }
    return result;
}
console.log(caculate('-', 2, 3, 4,5));