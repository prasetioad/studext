import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Dashboard from '../pages/dashboard'

function Index() {
    return (
        <Router>
            <Switch>
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/' component={Dashboard} />
            </Switch>
        </Router>
    )
}

export default Index
