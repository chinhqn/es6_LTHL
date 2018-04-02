/*
let student = {
    name: "Chinh",
    courses: ["Android", "PHP", "Java"],
    showInfo: function () {
        var _this = this;
        this.courses.forEach(function (cousre) {
            console.log(`${_this.name} study ${cousre}`);
        });
    }
};
student.showInfo();
*/
/*
let student = {
    name: "Chinh",
    courses: ["Android", "PHP", "Java"],
    showInfo: function () {
        this.courses.forEach(function (cousre) {
            console.log(`${this.name} study ${cousre}`);
        }.bind(this));
    }
};
student.showInfo();
*/

let student = {
    name: "Tran",
    courses: ["Android", "PHP", "Java"],
    showInfo: function () {
        this.courses.forEach(cousre => console.log(`${this.name} study ${cousre}`));
    }
};
student.showInfo();
