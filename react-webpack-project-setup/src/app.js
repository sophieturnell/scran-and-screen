import React from 'react'
import ReactDOM from 'react-dom'

// import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import 'bulma'
import './style.scss'
import Home from './components/common/Home'

class App extends React.Component {

  render() {
    return (
      <Home />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

