import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import 'bulma'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      query: '',

      data: null,

      Id: '',
      Type: '',

      errors: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  

  }

  handleSubmit(e) {
    console.log(this.state)
    e.preventDefault()
    axios.get(`https://developers.zomato.com/api/v2.1/locations?query=%20${this.state.query}&count=10`, {
      headers: { 'user-key': process.env.ZOMATO_ACCESS_TOKEN }
    })
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err))

  }

  handleChange(e) {
    const query = e.target.value
    this.setState({ query })

  }

  render() {
    return (
      <>
        <img src="#" alt="ScranAndScreenLogo"></img>
        <p>Where would you like to eat?</p>

        <form onSubmit={this.handleSubmit}>
          <input
            className="search-box"
            placeholder="Please enter the area you'd like to eat in"
            onChange={this.handleChange}
          >
          </input>

          <button type="submit">Find!</button>
        </form>

        {(!this.state.data) ? null :
          <div>
            {this.state.data.location_suggestions.map(location => {
              return (
                <div key={location.entity_id}>
                  <Link to={`/TopScran:location_details?entity_id=${location.entity_id}&entity_type=${location.entity_type}`}>
                    {location.title}
                  </Link>
                </div>
              )
            })}
          </div>
        }


      </>
    )
  }

}


export default Home


// axios.get('https://developers.zomato.com/api/v2.1/locations', e.target.value) 