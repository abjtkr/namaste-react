import React from 'react';
import ReactDOM from 'react-dom/client'; 
// React Element
// element using react
const heading = React.createElement('h1',{},"Hello World from Namaste React 🚀 Episode 3");
console.log(heading)
// element using jsx
const jsxHeading = (<h1>
    Hello World from Namaste React 🚀 Episode 3
    </h1>);
console.log(jsxHeading)

// React Component
// Class based Component - Old Way
// Function Component  - New Way a functional component is a normal JS arrow function / normal function which return JSX object 
//way -1 
// const Heading = () => {
//     return  (<h1>
//         Hello World from Namaste React 🚀 Episode 3
//         </h1>);
// }
//way-2
// const Heading = () =>  (<h1> Hello World from Namaste React 🚀 Episode 3  </h1>);



const Title = () => (
    <div id='container'>
        <h1 className='heading'> Namaste React 🚀 Episode 3 functional component Title
        </h1>
    </div>
)
// we can use {} to insert a javascript code inside a JSX element like 
var abc = "HI from a js code inside JSX"
const title = (
    <div>
        <h2>{abc}</h2>
    </div>
)
// this is component composition =>  creating one component inside other 
// also we can use {} to insert JSX element inside react component 
const Heading  = () => (
    <div id='container'>
        < Title />
        {title}
        <h1 className='heading'> Hello World from Namaste React 🚀 Episode 3 </h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
// to render a react / jsx element
// root.render(jsxHeading)
// to render a react component
root.render(< Heading />)

