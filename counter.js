//* 1st approach

// const incrementBtn = document.querySelector(".increment");
// const decrementBtn = document.querySelector(".decrement");
// const resetBtn = document.querySelector(".reset");
// const counterValue = document.querySelector(".counter__value");
// let count = Number(counterValue.textContent);

// incrementBtn.addEventListener("click", counter);
// decrementBtn.addEventListener("click", counter);
// resetBtn.addEventListener("click", counter);

// function counter(e) {
//   const classList = e.target.classList;
//   if (classList.contains("increment")) count++;
//   else if (classList.contains("decrement")) {
//     if (count != 0) {
//       count--;
//     }
//   } else count = 0;
//   counterValue.textContent = count;
// }

//* 2nd approach
const buttons = document.querySelectorAll(".btn");
const counterValue = document.querySelector(".counter__value");
let count = Number(counterValue.textContent);

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const classList = btn.classList;
    if (classList.contains("increment")) count++;
    else if (classList.contains("decrement")) {
      if (count != 0) {
        count--;
      }
    } else count = 0;
    counterValue.textContent = count;
  });
});
