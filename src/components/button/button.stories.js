import "./button.css";
// import button from "./button.html";

export default { title: "Button" };

function createButton(buttonText) {
  const button = document.createElement("button");
  button.className = "btn";
  const text = document.createTextNode(buttonText);
  button.append(text);

  button.addEventListener("click", () => {
    alert("Follows button click");
  });
  return button;
}

export const addToCart = () => {
  const button = createButton("Add to cart");
  return button;
};

// There are other possiblities to write functions in JS
// button.addEventListener("click", function handleClick() {
//   alert("Button clicked");
// });

// button.addEventListener("click", function () {
//   alert("Button clicked");
// });

// function handleClick() {
//   alert("Button clicked");
// }
// button.addEventListener("click", handleClick);

// const handleClick = () => {
//   alert("Button clicked");
// };
// button.addEventListener("click", handleClick);
// button.addEventListener("contextmenu", handleClick);
