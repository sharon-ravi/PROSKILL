import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18
// import ReactDOM from 'react-dom'; // For React 17 or older
import './index.css'; // Optional global styles for index, if you have it
import App from './App';
import reportWebVitals from './reportWebVitals';

// For React 18
const container = document.getElementById('root'); // <<<<< MAKE SURE 'root' MATCHES THE ID IN index.html
const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you are on React 17 or older, it would look like this:
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root') // <<<<< MAKE SURE 'root' MATCHES THE ID IN index.html
// );

reportWebVitals();