// This function renders a custom React-like element into a DOM container
function customRender(reactElement, container) {
    // Create a new DOM element based on the type of the provided React element
    const domElement = document.createElement(reactElement.type);

    // Set the inner HTML content of the DOM element to the children of the React element
    domElement.innerHTML = reactElement.children;

    // Set the href and target attributes of the DOM element based on the props of the React element
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    // Append the created DOM element to the provided container
    container.appendChild(domElement);
}

// Define a custom React-like element
const reactElement = {
    type: 'a', // Type of the element (e.g., 'a' for anchor tag)
    props: {
        href: 'https://google.com', // URL to be opened when clicked
        target: '_blank' // Open the URL in a new tab/window
    },
    children: 'Click me to visit google' // Inner text or HTML content of the element
}

// Find the container element in the DOM where the custom element will be rendered
const mainContainer = document.querySelector('#root');

// Render the custom React-like element into the container
customRender(reactElement, mainContainer);
