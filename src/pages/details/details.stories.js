import { createQuantitySelector } from "../../components/quantitySelector/quantitySelector";
import { createButton } from "../../components/button/button";
import { createElement } from "../../utils/element.js";

export default { title: "Pages/Details" };

export const basic = () => {
  const main = createElement("main", { className: "details" });
  const header = createElement("header", { className: "details__header" });
  const title = createElement("h2", { innerText: "Macchiato" });
  header.append(title);

  const form = createElement("form", { className: "details__form" });
  const coffeeName = createElement("div", { innerText: "Macchiato" });
  const price = createElement("div", { innerText: "$2.80" });
  coffeeName.append(price);

  const coffeeSize = createElement("label", { innerText: "Size" });
  const size = createElement("input");
  coffeeSize.append(size);

  const coffeeSugar = createElement("label", { innerText: "Sugar" });
  const sugar = createElement("input");
  coffeeSugar.append(sugar);

  const quantitySelector = createQuantitySelector();
  const button = createButton("Add to cart");

  main.append(header);

  form.append(coffeeName);
  form.append(quantitySelector);
  form.append(coffeeSize);
  form.append(coffeeSugar);
  form.append(button);

  main.append(form);

  return main;
};
