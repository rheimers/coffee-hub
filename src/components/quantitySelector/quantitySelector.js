import minusSrc from "../../assets/minus.svg";
import plusSrc from "../../assets/plus.svg";
import { createElement } from "../../utils/element";

export const createQuantitySelector = () => {
  //Outer div
  const quantitySelector = document.createElement("div");
  quantitySelector.className = "quantitySelector";

  //First button (Minus)
  const minusButton = document.createElement("button");
  minusButton.className = "quantitySelector_minus";
  minusButton.innerHTML = "-";

  quantitySelector.append(minusButton);
  return quantitySelector;
};

//First button (Minus)
const minusButton = createElement("button", {
  className: "quantitySelector__minus",
  disabled: true,
});

//Minus image
const minusImage = document.createElement("img", {
  src: minusSrc,
  alt: "Minus",
});

minusButton.append(minusImage);

// Result
const resultElement = createElement("div", {
  className: "quantitySelector__result",
  innerText: "1",
});

//Second button (Plus)
const plusButton = createElement("button", {
  className: "quantitySelector__plus",
});

//Plus image
const plusImage = createElement("img", {
  src: plusSrc,
  alt: "Plus",
});

plusButton.append(plusImage);
