import React from 'react'
import { Link } from 'react-router-dom'

// name, url, address, timings, latitude, longitude, cuisines, price_range, thumb, featured_image, aggregate_rating

const ScranCard = ({ restaurant }) => (


  <div>
    <Link to={`/ScranShow${restaurant.id}`}>
      <div className='Card'>
        <h1>{restaurant.name}</h1>
        <h1>{restaurant.url}</h1>
        <h1>{restaurant.location.address}</h1>
        <h1>{restaurant.location.timings}</h1>
        <h1>{restaurant.url}</h1>
      </div>
    </Link>
  </div>
)


export default ScranCard