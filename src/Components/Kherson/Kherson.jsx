import React from "react";
import "./Kherson.css";

const Kherson = () => {
  setTimeout(() => {
    var h2 = document.querySelector("h2");
    h2.textContent = "11.11.2023";
    h2.classList = "year";
  }, 2000);

  return (
    <>
      <h1>ХЕРСОН</h1>
      <div class="container">
        <div class="heart"></div>
      </div>
      <h2>11.11.2022</h2>
    </>
  );
};

export default Kherson;
