// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


///Java Script - 1
// 03-01-2024
//Data Types in JS
//Primitive data types
//String
//Number
//Booleanb
//Mull
//Undefined

//Dynamically typed language
var str = "hello";
var num = 2;
var bol = true;

console.log(str);
console.log(num);
console.log(bol);

console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(bol));

var d = null;
//Null is a empty value which you assign to variable to suggest no value
//It is going to be used for nil checks or null checks
//Null exist and it alocated empty value
//Type of null is going to be object
//Everything in js is an object

console.log(typeof(d)); 
var e;
console.log(e); 
console.log(typeof(e)); 
console.log(typeof(typeof(e))); 
//typeof typeof everything is going to be string

console.log("JS");
//Coercion => conversion
var a="2";//implicit coercion of a string to a number
var c= +"2";//explicit coercion of a string to a number
var b=2
console.log(a == b);
console.log(a ===  b);
console.log(typeof(+"2"));
console.log(b);
console.log(+"abc");
console.log(typeof(+"abc"));
//unary operator => +, - etc.
console.log(NaN == NaN);
console.log(null == null);
//NaN === infinity



