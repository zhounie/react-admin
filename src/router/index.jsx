
import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from '../components/Login/index'
import Home from '../components/Home/index'
import Layout from '../components/Layout/index'
import About from '../components/About/index'
import List from '../components/List/index.js'

export default () => (
    <HashRouter>
        <Route exact path="/login" component={Login}></Route>
        <Route path="/">
            <Layout>
                <Route exact path="/statistics" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/list" component={List}></Route>
            </Layout>
        </Route>
    </HashRouter>
)
