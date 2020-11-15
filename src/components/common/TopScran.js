import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


import ScranCard from './ScranCard'

class TopScran extends React.Component {
  constructor() {
    super()

    this.state = {
      restaurants: null
    }
  }

  // PAGE LOADS WITH LOCATION BASED RESTAURANT RECS
  componentDidMount() {
    axios.get(`https://developers.zomato.com/api/v2.1/location_details${this.props.location.search}`, {
      headers: { 'user-key': process.env.ZOMATO_ACCESS_TOKEN }
    })
      .then(res => this.setState({ restaurants: res.data }))
      .catch(err => console.log(err))
  }

  render() { 
    console.log(this.props)
    if (!this.state.restaurants) return null
    return (
      <>
      <header>
        <Link to={'/'}>
          <img className="logo-image-header" src="./../assets/ScranAndScreenLogo.png" alt="ScranAndScreenLogo"></img>
        </Link>
        <h3>Scran &amp; Screen</h3>
      </header>
      

      <main>
        <div className="card-wrapper">
          {this.state.restaurants.best_rated_restaurant.map((restaurant, i ) => (
            <ScranCard key={i} {...restaurant} />
          ))} 
        </div>
      </main>
      </>
    )
  }
}

export default TopScran
