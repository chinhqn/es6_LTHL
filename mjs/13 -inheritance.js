class  Person {
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

// console.log(personObj.showInfo());
class Student extends Person {
    constructor (code, name, age, lop) {
        super(name, code, age);
        this.lop = lop;
    }
    showInfo(){
        super.showInfo();
        console.log( "-" + this.lop);
    }
}
let personObj = new Person("php", "chinh", 1995);
personObj.showInfo();
let studentObj = new Student("php", "chinh1", 1995, 30);
studentObj.showInfo();