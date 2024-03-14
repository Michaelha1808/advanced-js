console.log(age);
console.log(fullname);
var age = 18;

{
  console.log(fullname);
  let fullname = "Michael";
}
// Var sẽ được hoisting lên đầu và nhận vào giá trị undefined
// const let vẫn sẽ được đưa lên đầu nhưng không được khởi tạo giá trị ban đầu và được đưa vào dead zone ( vùng tạm thời không truy cập được )

const counter1 = makeCounter();
console.log(counter1());
function makeCounter() {
  let counter = 0;
  return increase;
  function increase() {
    return ++counter;
  }
}
