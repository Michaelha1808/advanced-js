primitive;
let a = 1;
let b = a;
a = 2;

console.log(b);

reference;
let a = {
  name: "Mercedes",
};
let b = a;
a.name = "Porche";

console.log(b);

const student = {
  name: "Michael Ha",
  profile: {
    firstName: "Michael",
    lastName: "Ha",
    introduction: "Male",
  },
};

const studentProfile = student.profile;
student.profile.introduction = "Good boy";
console.log(studentProfile.introduction);

function sum(a, b) {
  // let a = c
  // let b = d
  a = 0;
  b = 0;
  console.log(a, b);
}
const c = 1;
const d = 2;
sum(c, d);
console.log(c, d);

function func(obj) {
  // let obj = a
  obj.name = "Mercedes";
  console.log(obj);
}

const a = {
  name: "Porsche",
};
func(a);

console.log(a);

function createCar(obj) {
  // dành cho object có 1 cấp
  obj = { ...car };
  // objec có nhiều cấp
  obj = JSON.parse(JSON.stringify(obj));
  obj.name = "Mercedes";
  return obj;
}

const car = {
  name: "Porsche",
};
const newCar = createCar(car);

console.log(car);
console.log(newCar);

const a = {
  name: "Porsche",
};
const b = {
  name: "Porsche",
};

console.log(a == b);
