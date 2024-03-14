// function createCounter() {
//   let counter = 0;
//   function increase() {
//     return ++counter;
//   }
//   return increase;
// }
// const counter1 = createCounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// function createLogger(namwspace) {
//   function logger(message) {
//     console.log(`[${namwspace}] ${message}`);
//   }
//   return logger;
// }
// // ======== app =================================================
// const inforLogger = createLogger("Info");

// inforLogger("Bắt đầu gửi mail");
// inforLogger("Gửi mail lỗi lần 1, thử lại...");
// inforLogger("Gửi mail thành công cho user xxx");

// const errorLogger = createLogger("Error");

// errorLogger("Email không tồn tại");
// errorLogger("Gửi mail lỗi lần 1, thử lại...");
// errorLogger("Gửi mail thành công cho user xxx");

function createStorage(key) {
  const store = JSON.parse(localStorage.getItem(key)) ?? {};
  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
  };
  const storage = {
    get(key) {
      return store[key];
    },
    set(key, value) {
      store[key] = value;
      save();
    },
    remove(key) {
      delete store[key];
      save();
    },
  };
  return storage;
}

function createApp() {
  const cars = [];
  return {
    add(car) {
      cars.push(car);
    },
    show() {
      console.log(cars);
    },
  };
}
const app = createApp();
app.add("Mercedes");
app.add("RollRoyce");
