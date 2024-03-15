const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

console.log($("#heading"));

const app = (() => {
  const cars = ["BMW"];
  const root = $("#root");
  const input = $("#input");
  const submiit = $("#submiit");

  return {
    add(car) {
      cars.push(car);
    },
    delete(index) {
      cars.splice(index, 1);
    },
    render() {
      const html = cars
        .map(
          (car, index) => `
            <li>
            ${car}
            <span data-index="${index}" class="delete>&times</span>
            </li>
        `
        )
        .join("");

      root.innerHTML = html;
    },
    hanldeDelete(e) {
      const deleteBtn = e.target.closest(".delete");
      if (deleteBtn) {
        const index = deleteBtn.dataset.index;
        this.delete(index);
        this.render();
      }
    },
    init() {
      // Hanlde DOM events
      submiit.onclick = () => {
        const car = input.value;
        this.add(car);
        this.render();
        input.value = null;
        input.focus();
      };
      root.onclick = this.hanldeDelete.bind(this);
      this.render();
    },
  };
})();

app.init();

// Delegate pattern
