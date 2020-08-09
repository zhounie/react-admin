import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router/index.jsx'
import 'antd/dist/antd.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './store/reducer'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <Router></Router>
    </Provider>
    , document.getElementById("root"))
