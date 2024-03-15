this.firstName = "Minh";
this.lastName = "Thu";

const teacher = {
  firstName: "Minh",
  lastName: "Thao",
  getFullName(data1, data2) {
    console.log(data1, data2);
    return `${this.firstName} ${this.lastName}`;
  },
};

const student = {
  firstName: "Student",
  lastName: "dadadd",
};

//Case 1
// console.log(teacher.getFullName());

//Case 2
const getTeacherName = teacher.getFullName.bind(student, "Michael", "Ha");
console.log(getTeacherName("Michael", "Ha"));
/////
////////////////////////////////////////////////////////////////
const teacher = {
  firstName: "Minh",
  lastName: "Thao",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
