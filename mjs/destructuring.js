// let arr = [122, "ES6", false];
// let [id, name, free] = arr;
// console.log(id + ": " + name + ": " + free);

let arrObj = {
   id: 122,
   name: "ES6",
   free: false,
};
let {id, name, free, createdBy = "admin"} = arrObj;
console.log(id + ": " + name + ": " + free + ": " + createdBy);


