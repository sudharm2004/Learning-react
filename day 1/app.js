//USING NORMAL JAVASCRIPT TO CREATE AND RENDER ELEMENTS ON WEB PAGE
// const root=document.getElementById('root');

// const heading1=document.createElement('h1');
// heading1.innerHTML="hello world!";
// root.appendChild(heading1);

// const heading2=document.createElement('h2');
// heading2.innerHTML="hello world h2!";
// root.appendChild(heading2);


//USING REACT TO CREATE AND RENDER WEB PAGES
const heading1 = React.createElement("h1", {}, "hello world1");
const heading2 = React.createElement("h1", {}, "hello world2");
const heading3 = React.createElement("h1", {}, "hello world3");
const container= React.createElement('div',{className:'container'},[heading1,heading2,heading3]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
