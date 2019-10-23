import React from 'react'
import axios from 'axios'

import Home from './Home'
import ScranCard from './ScranCard'

class TopScran extends React.Component {
  constructor() {
    super()

    this.state = {
      restaurants: null
    }


  }

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
        <img className="logo-image-header" src="./../assets/ScranAndScreenLogo.png" alt="ScranAndScreenLogo"></img>
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
