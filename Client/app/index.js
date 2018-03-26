var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
import 'bootstrap/dist/css/bootstrap.min.css';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import 'open-iconic/font/css/open-iconic-bootstrap.css';


require('./index.css');

// state
// lifecycle event
// UI


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
