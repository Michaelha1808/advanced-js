// const iphone7 = {
//   name: "iphone 7",
//   color: "red",
//   weight: 300,
//   takePhoto() {
//     console.log(this);
//   },
//   objChild: {
//     methodChild() {
//       console.log(this);
//     },
//   },
// };

// iphone7.objChild.methodChild();

// function Car(name, color, width) {
//   this.name = name;
//   this.color = color;
//   this.width = width;
//   this.run = function () {
//     console.log("running...", this);
//   };
// }
// const Mercedes = new Car("Mercedes", "Black", "1000");
// console.log(Mercedes.run());

function Car(name, color, width) {
  this.name = name;
  this.color = color;
  this.width = width;
}
Car.prototype.run = function () {
  function test() {
    console.log(this);
  }
  test();
};
const Mercedes = new Car("Mercedes", "Black", "1000");
console.log(Mercedes.run());
