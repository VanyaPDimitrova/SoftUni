// Ние управляваме React, React управлява DOM
// Това е ЕДИНСТВЕНАТА DOM заявка, която правим в едно React приложение.

// Get root HTML Element
const rootHTMLElement = document.getElementById('root');


// Initialize root React Element
const rootReactElement = ReactDOM.createRoot(rootHTMLElement);

// Create basic React Element
const headingReactElement = React.createElement('h1', null, 'Hello JSX from React!');
const secondHeadingReactElement = React.createElement('h2', null, 'JSX is Awesome!');
const headingReactSectionElement = React.createElement(
      'header', 
      null, 
      headingReactElement, 
      secondHeadingReactElement
    );

// Render content
rootReactElement.render(headingReactSectionElement);
