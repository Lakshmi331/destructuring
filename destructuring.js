//example of Object Destructuring--1
var obj = {
    name: "Lakshmi",
    gender: "Female",
    course: "react"
};

console.log(obj.name);

//exampl 2
const {name,gender,course} = obj;
console.log(gender);
console.log(name);


//array destructuring
var arr = [2,3,4,5,6];

const [num1,num2,num3] = arr;
console.log(num1);
console.log(num2);
console.log(num3);
