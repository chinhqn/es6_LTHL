function myProfile(name, age, address) {
    return {
        name,
        age,
        address,
        showInfo: function () {
            console.log(`${name + '-' + age + '-' + address}`);
        },
        showInfo1(){
            console.log(`${name + '-' + age + '-' + address}`);
        },
        showInfo2(delimiter='_'){
            console.log(`${name + delimiter + age + delimiter + address}`);
        }
    }
}
var  myP = myProfile('chinh', 12, 'dai loc');
// myP.showInfo();
// myP.showInfo1();
myP.showInfo2();
console.log(myP);