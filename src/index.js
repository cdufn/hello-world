import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//<p>Hello World</p>
// version 1 - pure Javascript
// const //p1 = React.createElement("p", {id: "firstPara"}, "Hello World");
// const li1 = React.createElement("li", null, "first bullet");
// const li2 = React.createElement("li", null, "second bullet");
// const ul = React.createElement("ul", null, [li1, li2]);
// const ul2 = React.createElement("ul", null, [
//   React.createElement("li", null, "some details"),
//   React.createElement("li", null, "some other details")
// ]);
// const myDiv = React.createElement("div", null, [p1, ul, ul2]);

// version 2 JSX
// const p1 = <p style={{background: '##ff0000', "font-size": "14px"}}>Hows it going</p>;
// const ul = <ul className="firstList">
//     <li>first</li>
//     <li>second</li>
// </ul>

// const myLabel = <label htmlFor="name">Enter name</label>

// const twoparagraphs = <div><p>para1</p><p>param2</p></div>

// const myName = "Ciaran";
// const greeeting = <p>Hellow {myName}</p>

// if(myName === "Ciaran"){
//   console.log("Correct");
// }
//   else{
//     console.log("Wrong");
//   }

//   // Ternery statement
//   myName === "Ciaran" ? console.log("Correct") : console.log("Wrong");

//   const fullName = myName === "Ciaran" ? "Correct" : "Wrong";

//   // Destructuring 
//   const numbersArray = [1,2,3,4];
//   const [first, second] = numbersArray;
//   console.log(first, second);

//   const customer = {name: "Ciaran", age: 41, active: true};
//   const {age, active} = customer;
//   console.log(age, active);



// const root = ReactDOM.createRoot(document.getElementById("root")); 
// root.render(ul, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
