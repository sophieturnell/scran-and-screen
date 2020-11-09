import React from 'react'
import { Link } from 'react-router-dom'

// name, url, address, timings, latitude, longitude, cuisines, price_range, thumb, featured_image, aggregate_rating

const ScranCard = ({ restaurant }) => (

  <div>
    <Link to={`/ScranShow${restaurant.id}`}>
      <div className='card'>

        <div className='left-card'>
          <img src={restaurant.thumb} />
        </div>

        <div className='right-card'>
          <h2>{restaurant.name}</h2>
          <p>Cuisine: {restaurant.cuisines}</p>
          <p>Rating: {restaurant.user_rating.aggregate_rating}</p>
          <p>{restaurant.location.address}</p>
          {/* <a href="{restaurant.url}">Go to restaurant site</a> */}
        </div>
        
      </div>
    </Link>
  </div>
)


export default ScranCard

