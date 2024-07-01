// Ние управляваме React, React управлява DOM
// Това е ЕДИНСТВЕНАТА DOM заявка, която правим в едно React приложение.

// Get root HTML Element
const rootHTMLElement = document.getElementById('root');


// Initialize root React Element
const rootReactElement = ReactDOM.createRoot(rootHTMLElement);

// Create basic React Element
const headingReactSectionElement = (
          <heder className="heading">
            <h1>Hello JSX from React!</h1>
            <h2>JSX is Awesome!</h2>
          </heder>
        );

// Render content
rootReactElement.render(headingReactSectionElement);
