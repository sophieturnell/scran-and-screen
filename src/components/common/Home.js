import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


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

  // SAVES INPUT TO QUERY TO BE USED IN THE GET REQUEST WHEN FORM IS SUBMITTED
  handleChange(e) {
    const query = e.target.value
    this.setState({ query })
  }

  render() {
    return (
      <>
        <div className="page-container">
          <div className="logo-container">
            <img className="logo-image" src="./../assets/ScranAndScreenLogo.png" alt="ScranAndScreenLogo"></img>

            <h1>Scran &amp; Screen</h1>

            <h2>Tell us where you&#39;d like to eat and we&#39;ll find you a movie nearby</h2>

            <form onSubmit={this.handleSubmit}>
              <input
                className="search-box"
                placeholder="Please enter location here"
                onChange={this.handleChange}
              >
              </input>

              <button type="submit">Find!</button>
            </form>

            {(!this.state.data) ? null :
              <div className="location-sug">
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
          </div>
        </div>
      </>
    )
  }
}


export default Home