import React from 'react';
// import { createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';


// const domNode = document.getElementById('root');
// const root = createRoot(domNode);
// root.render(<App/>);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)