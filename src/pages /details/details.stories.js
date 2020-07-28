import { useEffect } from "@storybook/client-api";

export default {
  title: "Pages/Details",
};

export const basic = () => {
  //   alert("Button!!!");
  useEffect(() => {
    //  alert("Button!!!");
    const button = document.querySelector(".btn");
    button.addEventListener("click", () => {
      alert(button.innerHTML);
      button.innerHTML = "9000";
    });
  });
  return '<button class="btn">Cool</button>';
};

/*
calls international alert function
*/

// Calls internal alert function
// const message = "Hello Fishy"
// message = "Fish Ahoi Emjoji???";

// let message = "Hello Fishy";
// alert(message);
// message = "Fish ahoi";
// // alert ("Hello");
// alert("Hello");

// const numberOfStudents = 15.5;
// const message = `Hello ${numberOfStudents} fishes`;
// alert(message);
