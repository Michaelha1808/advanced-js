"use strict";
fullname = "daddad";
function testFunc() {
  age = 18;
}
testFunc();

console.log(fullname);
console.log(age);

const student = {
  fullname: "abbd",
};
const student = Object.freeze({
  fullname: "abbd",
});
student.fullname = "hello world";
console.log(student);

{
  function sum(a, b) {
    return a + b;
  }
}
console.log(sum(9, 6));
