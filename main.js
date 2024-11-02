let buttons = document.querySelectorAll(".btn");
let answers = document.querySelectorAll(".question-answer");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    answers.forEach((ans, i) => {
      ans.classList.add("hidden");
      buttons[i].setAttribute("src", "./assets/images/icon-plus.svg");
    });

    answers[index].classList.toggle("hidden");

    btn.classList.contains("hidden")
      ? btn.setAttribute("src", "./assets/images/icon-plus.svg")
      : btn.setAttribute("src", "./assets/images/icon-minus.svg");
  });
});
