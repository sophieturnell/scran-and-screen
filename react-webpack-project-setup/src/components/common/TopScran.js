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
      <p>TopScran </p>
      <div>
        {this.state.restaurants.best_rated_restaurant.map((restaurant, i ) => (
          <ScranCard key={i} {...restaurant} />
        ))} 

        
      </div>
      </>
    )
  }
}

export default TopScran
