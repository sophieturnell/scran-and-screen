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
    console.log(this.props.match.params)
    axios.get(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${this.props.match.params}`, {
      headers: { 'user-key': process.env.ZOMATO_ACCESS_TOKEN }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }


  render() {
    return (
      <h1>bdjsfbon</h1>
    )
  }
}

export default ScranShow