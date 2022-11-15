import React from 'react'; // JSX
import ReactDOM from 'react-dom/client';
import './reset.css';
import App from './Components/App/App'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  
    </React.StrictMode>
);

