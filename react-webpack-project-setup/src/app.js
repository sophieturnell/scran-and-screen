import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import 'bulma'
import './style.scss'
import Home from './components/common/Home'
import TopScran from './components/common/TopScran'

const App = () => (
  <BrowserRouter>
    <main>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/TopScran:id" component={TopScran} />
      </Switch>

    </main>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

