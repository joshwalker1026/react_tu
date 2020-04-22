import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import "antd/dist/antd.css";

if (module.hot) {
    module.hot.accept()
}

var rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement);