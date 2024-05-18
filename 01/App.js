import React from 'react';
import ReactDOM from 'react-dom/client'; 
// const heading = React.createElement('div',{}, React.createElement('h1',{}, 'Hello World from React'));
parent = React.createElement("div", {}, [
    React.createElement("div", {}, [
      React.createElement("h1", {}, "Hello World from React"),
      React.createElement("h2", {}, "Hello World from React")
    ]),
    React.createElement("div", {}, [
      React.createElement("h1", {}, "Hello World from React"),
      React.createElement("h2", {}, "Hello World from React")
    ]) 
  ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render(parent);