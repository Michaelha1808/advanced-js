let fullname = "Miichael";
(function myfunc(e) {
  console.log("dâdad", e);
})(fullname);

const app = (function () {
  const cars = [];
  return {
    add(car) {
      cars.push(car);
    },
    edit(index, car) {
      cars[index] = car;
    },
    delete(index) {
      cars.splice(index, 1);
    },
  };
})();
let b = 0;
if (b) {
  console.log(1);
} else {
  console.log(2);
}

(function js(x) {
  const y = (j) => j * x;

  console.log(y(s()));

  function s() {
    return j();
  }

  function j() {
    return x ** x;
  }
})(3);
