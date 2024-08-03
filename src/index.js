import React from "react";
import ReactDOM from "react-dom";

const luckyNumber = 6;
const fname = "Sabbha";
const lname = "Mondal";
const randomImg = "https://picsum.photos/200";

ReactDOM.render(
  <>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Hello, this is Sabbha
    </h1>
    <h4>Full Name: {`${fname} ${lname}`}</h4>
    <h4>
      Full Name: {fname} {lname}
    </h4>
    <h4>Full Name: {fname + " " + lname}</h4>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
    <p>My lucky number: {luckyNumber}</p>
    <p>My random number: {Math.floor(Math.random() * 10)}</p>
    <hr />
    <div>
      <img
        className="food-img"
        src="https://www.dosafactorymenu.com/blog-admin/images/indian-food-items-apt-for-everyone041641.jpeg"
        alt="sabji-chapati"
      />
      <img
        className="food-img"
        src="https://images.news18.com/ibnlive/uploads/2021/01/1610716314_untitled-design-2021-01-15t184025.049.jpg"
        alt="pizza"
      />
      <img
        className="food-img"
        src="https://images.herzindagi.info/image/2021/Sep/chaii-samosa.jpg"
        alt="samosa-chai"
      />
      <img className="food-img" src={randomImg} alt="random-img" />
    </div>
    <hr />
    <p>
      &copy; {fname} {lname}, {new Date().getFullYear()}
    </p>
  </>,
  document.getElementById("root")
);