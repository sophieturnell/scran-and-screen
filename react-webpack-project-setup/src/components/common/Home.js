import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import 'bulma'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      query: '',

      data: null,

      errors: {}
    } 

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleSubmit(e) {
    e.preventDefault()
    // console.log( this.state.query )
    axios.get('https://developers.zomato.com/api/v2.1/locations?query=%20Liverpool&count=10', {
      headers: { 'user-key': process.env.ZOMATO_ACCESS_TOKEN } 
    })
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err))

  }

  handleChange(e) {
    const query = e.target.value
    this.setState({ query })
    console.log(this.state)
  }

  render() {
    return (
      <>
        <img src="#" alt="ScranAndScreenLogo"></img>
        <p>Where would you like to eat?</p>

        <form onSubmit={ this.handleSubmit }>
          <input 
            className="search-box" 
            placeholder="Please enter the area you'd like to eat in" 
            onChange={ this.handleChange }
          >
          </input>
          <button type="submit">Find!</button>
        </form>


      </>
    )
  }

}

export default Home


// axios.get('https://developers.zomato.com/api/v2.1/locations', e.target.value) 