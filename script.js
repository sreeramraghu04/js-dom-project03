let btns = document.querySelector("#btns");
let h2 = document.querySelector("#h2");

/* h2.addEventListener("click", () => {
    h2.textContent = randomColor();
}) */

btns.addEventListener("click", () => {
  document.body.style.backgroundColor = randomColor();
  /*   h2.textContent = randomColor();
   */
});

let randomColor = () => {
  //create a function called random color that returns a hex color code
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + letters[Math.floor(Math.random() * 16)];
    btns.innerHTML = color;
  }
  return color;
};

/* console.log(randomColor());
 */
