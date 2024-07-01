// Ние управляваме React, React управлява DOM
// Това е ЕДИНСТВЕНАТА DOM заявка, която правим в едно React приложение.

// Get root HTML Element
var rootHTMLElement = document.getElementById('root');

// Initialize root React Element
var rootReactElement = ReactDOM.createRoot(rootHTMLElement);

// Create basic React Element
var headingReactElement = React.createElement('h1', null, 'Hello JSX from React!');
var secondHeadingReactElement = React.createElement('h2', null, 'JSX is Awesome!');
var headingReactSectionElement = React.createElement('header', null, headingReactElement, secondHeadingReactElement);

// Render content
rootReactElement.render(headingReactSectionElement);