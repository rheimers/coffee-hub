import { createQuantitySelector } from "../../components/quantitySelector/quantitySelector";
import { createButton } from "../../components/button/button";
import { createElement } from "../../utils/element.js";

export default { title: "Pages/Details" };

export const basic = () => {
  const main = document.createElement("main");

  const quantitySelector = createQuantitySelector();
  main.append(quantitySelector);
  const button = createButton("Add to cart");
  main.append(button);

  return main;
};
