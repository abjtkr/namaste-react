import React from 'react';
import ReactDOM from 'react-dom/client'; 
// element using react
const heading = React.createElement('h1',{},"Hello World from Namaste React 🚀 Episode 3");
console.log(heading)
// element using jsx
const jsxHeading = <h1>Hello World from Namaste React 🚀 Episode 3</h1>;
console.log(jsxHeading)