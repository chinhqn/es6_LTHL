class  Student {
    constructor (code, name, age) {
        this.code = code;
        this.name = name;
        this.age = age;
    }
    showInfo(){
        return this.name + '-' + this.getAge() +'-'+ this.code;
    }
    getAge(){
        let today = new Date();
        let year = today.getFullYear();
        // console.log(this.age);
        return year - this.age;
    }
}
let studentObj = new Student('chinh', 'code', 1992);
// studentObj.showInfo();
console.log(studentObj.showInfo());