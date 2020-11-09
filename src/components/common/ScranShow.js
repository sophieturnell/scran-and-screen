import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class ScranShow extends React.Component {

  constructor() {
    super()

    this.state = {
      restaurant: null
    }

  }

  // LOADS API WITH CHOOSEN RESTAURANT DETAILS
  componentDidMount() {
    axios.get(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${this.props.match.params.id}`, {
      headers: { 'user-key': process.env.ZOMATO_ACCESS_TOKEN }
    })
      .then(res => this.setState({ restaurant: res.data }), this.getCinema())
      .catch(err => console.log(err))
  }

  getCinema() {
    axios.get('https://api.cinelist.co.uk/search/cinemas/coordinates/50.7200/-1.8800')
      .then(res => (console.log(res)))
  }

  render() {
    if (!this.state.restaurant) return null
    const { restaurant } = this.state
    return (
      <>
        <header>
          <Link to={'/'}>
            <img className="logo-image-header" src="./../assets/ScranAndScreenLogo.png" alt="ScranAndScreenLogo"></img>
          </Link>
          <h3>Scran &amp; Screen</h3>
        </header>

        <main>
          <div className="scran-screen">

            <div className="show-box">
              <div className="scran-box">
                <img className="feature-image" src={restaurant.featured_image}/>
                <h3>{restaurant.name}</h3>
                <h2>{restaurant.location.address}</h2>
                <br></br>

                <p className="paddedP">{restaurant.timings}</p>

                <button className="link-button">
                  <a href={restaurant.url}>Go!</a>
                </button>
              </div>
            </div>

            <div className="show-box">
              <div className="screen-box">
                <h2>Leicester Square, London, WC2H 7NA</h2>
                <br></br>
                <p><b>Tel:</b> 0871 471 4714</p>
                <p><b>Tube:</b> Leicester Square</p>
                <p><b>Price:</b> £14.50-£24.50, concs £12.50-£18.50, family £54-£68</p>
                <p>3D Films add £1-£2.20, 3D glasses £1</p>
                <p><i>Note: Times shown are daily except where a day is shown. For example, Thu 5.30pm- means a showing at 5.30 on Thursday only. The weeks below run from the Friday to the following Thursday.</i></p>
                <br></br>
                
                <h2>From Friday 4th Oct to Thursday 10th Oct</h2>

                <p><b><u>Mulan</u></b></p>
                <p>Fri-Sun/Tue/Wed/Thu 11:30</p>
                <p>(Fri/Sat/Tue/Thu) 13:30 14:20 17:10 18:40 20:00 22:50</p>
                <p>(Fri/Sat); Mon 20:00</p>
                <p><b><u>Tenet</u></b></p>
                
                <p>Fri-Sun/Tue/Wed/Thu 10:50</p>
                <p>(Fri/Sat/Tue-Thu) 13:40 18:50;</p>
                
              </div>
            </div>

          </div>
        </main>
      </>
    )
  }

}

export default ScranShow

