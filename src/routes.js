import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Articles from './Components/Articles/Articles'
import Contact from './Components/Contact/Contact'
import Slider from './Components/Slider/Slider'
import Projects from './Components/Projects/Projects'

export default (
    <Switch>
        <Route exact path='/' component={Slider} />
        {/* <Route path='/articles' component={Articles} /> */}
        <Route path='/contact' component={Contact} />
        <Route path='/projects' component={Projects} />
        {/* <Route path='/' render={() => {
                return <div>Page not found!</div>
            }} /> */}
    </Switch>
)