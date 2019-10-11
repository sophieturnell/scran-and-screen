import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class ScranShow extends React.Component {

  constructor() {
    super()

    this.state = {
      restaurant: null
    }

  }

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
    // const { restaurant } = this.state.restaurant
    return (
      <>
        <header>
          <img className="logo-image-header" src="./../assets/ScranAndScreenLogo.png" alt="ScranAndScreenLogo"></img>
          <h3>Scran &amp; Screen</h3>
        </header>

        <main>
          <div className="scran-screen">

            <div className="show-box">
              <div className="scran-box">
                <img className="feature-image" src={this.state.restaurant.featured_image}/>
                <h3>{this.state.restaurant.name}</h3>
                
                <p>{this.state.restaurant.location.address}</p>
                <p>{this.state.restaurant.timings}</p>

                <button className="link-button">
                  <a href={this.state.restaurant.url}>Go!</a>
                </button>
              </div>
            </div>

            <div className="show-box">
              <div className="screen-box">
                <h2>Leicester Square, London, WC2H 7NA</h2>
                <p>Tel: 0871 471 4714</p>
                <p>Tube: Leicester Square</p>
                <p>Price: Â£14.50-Â£24.50, concs Â£12.50-Â£18.50, family Â£54-Â£68, 3D Films add Â£1-Â£2.20, 3D glasses Â£1</p>
                <p>Been there? Leave us a comment... </p>
                <p>View Map </p>
                <p>Note: Times shown are daily except where a day is shown. For example, Thu 5.30pm- means a showing at 5.30 on Thursday only. The weeks below run from the Friday to the following Thursday.</p>
                <p>From Friday 4th October</p>
                <p>To Thursday 10th October</p>
                <p>Ad Astra</p>
                <p>Fri-Sun/Tue/Wed/Thu 11:30 (Fri/Sat/Tue/Thu) 13:30 14:20 17:10 18:40 20:00 22:50 (Fri/Sat); Mon 20:00</p>
                <p>Downton Abbey</p>
                <p>Fri-Sun/Tue/Wed/Thu 10:50 (Fri/Sat/Tue-Thu) 13:40 18:50; Mon 18:50</p>
                {/* <p>Hustlers</p>
                <p>Fri-Sun/Tue/Wed/Thu 12:50 15:30 18:10 20:50; Mon 20:50</p> */}
                
              </div>
            </div>

    

          </div>
        </main>
      </>
    )
  }





}

export default ScranShow

