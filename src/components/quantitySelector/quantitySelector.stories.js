import "./quantitySelector.css";
import quantitySelector from "./quantitySelector.html";
import { useEffect } from "@storybook/client-api";

export default { title: "Quantity Selector" };

export const coffeeSelector = () => {
  useEffect(() => {
    // Select buttons here
    const minusButton = document.querySelector(".quantitySelector__minus");
    const plusButton = document.querySelector(".quantitySelector__plus");

    minusButton.addEventListener("click", () => {
      alert(quantityButton.innerHTML);
      quantityButton.innerHTML = "Cool";
    });

    const quantityButtonDown = document.querySelector(".buttonDown");
    quantityButtonDown.addEventListener("click", () => {
      alert(quantityButtonDown.innerHTML);
      quantityButtonDown.innerHTML = "Not so cool";
    });
  });
  return quantitySelector;
};
