import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';

import App from './components/App/App.js';

// Bootstrap include
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'


// Fontawesome icons include
import '@fortawesome/fontawesome-free/css/fontawesome.css';


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

