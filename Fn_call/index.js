// const teacher = {
//   firstName: "Michael",
//   lastName: "Ha",
// };

// const me = {
//   firstName: "Son",
//   lastName: "Smith",
//   showFullName() {
//     console.log(`${this.firstNathis} ${me.lastName}`);
//   },
// };
// me.showFullName.call(teacher);
////////////////////////////////
// function Animal(name, weight) {
//   this.name = name;
//   this.weight = weight;
// }

// function Chicken(name, weight, legs) {
//   Animal.call(this, name, weight);
//   this.legs = legs;
// }

// const michael = new Chicken("Michael ha", 60, 2);

// console.log(michael);
////////////////////////////////
function logger() {
  console.log(...arguments);
}
logger(1, 2, 3, 4, 5);
