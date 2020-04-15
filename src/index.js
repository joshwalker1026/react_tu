import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App.jsx'

if (module.hot) {
    module.hot.accept()
}

var rootElement = document.getElementById('root')

ReactDOM.render(<App name='Josh'></App>, rootElement)