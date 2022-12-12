const colors = ["red", "blue", "green", "black", "white"];
const body = document.querySelector("body");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let input = document.querySelector("input");
  colors.includes(input.value)
    ? (body.style.backgroundColor = input.value)
    : alert("wrong color");
});
