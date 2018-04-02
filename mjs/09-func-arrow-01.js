function funcA01(name, age) {
    return `My name: ${name}, ${age} year old`;
}
var funcA02 = function(name, age) {
    return `My name: ${name}, ${age} year old`;
};
var funcA03 = (name, age) => {
    return `My name: ${name}, ${age} year old`;
};
var funcA04 = (name, age) => `My name: ${name}, ${age} year old`;
console.log(funcA04('chinh', 12));