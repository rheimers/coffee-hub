export const createQuantiitySelector = () => {
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
//Minus image
const minusImage = document.createElement('img');
minusImage.src= 
// kommt noch was

// Result
const resultElement = document.createElement("div");
resultElement.className = "quantitySelector__result";
resultElement.innerText = "1";

//Second button (Plus)
const plusButton = document.createElement ("button");
plusButton.className = "quantitySelector_plus";
plusButton.innerHTML = "+";

quantitySelector.append(minusButton);
quantitySelector.append(resultButton);
quantitySelector.append(plusButton);

return quantitySelector;

