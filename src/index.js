import React from "react";
import ReactDOM from "react-dom";

const luckyNumber = 6;
const fname = "Sabbha";
const lname = "Mondal";

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
    <p>
      &copy; {fname} {lname}, {new Date().getFullYear()}
    </p>
  </>,
  document.getElementById("root")
);
