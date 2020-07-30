import "./list.css";
import { createElement } from "../../utils/element";

export function createList() {
  const coffees = ["Espresso", "Cappuccino", "Macchiato", "Mocha", "Latte"];

  const list = createElement("ul");
  coffees.forEach((coffee) => {
    const listItem = createElement("li", { innerText: coffee.name });

    list.append(listItem);
  });

  return list;
}
