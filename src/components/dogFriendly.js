import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap'
import cats from '../components/inputCats.js'

class DogFriendly extends Component {
  constructor(props) {
    super(props)
    this.state = {
    buttonfalse: ""
    }
  }

  badgeAction = () => {
    let input = "dog friendly"
    let dogFriend = cats.filter(cat => (true == cat.dogFriendly))
    return dogFriendly
    this.setState({buttonfalse: input})
  }


	render() {
    let badgeAction = cats.filter(cat => (true == cat.dogFriendly))

    let dogFriend = badgeAction.map((cat.id) => {

      return (
        <span className="badge badge-pill badge-success">Dog Friendly</span>
      )
    }

    console.log(badgeAction)
    return(
      {dogFriend}
    )
	  }
}

export default DogFriendly;


{/*  return <span className="badge badge-pill badge-success">Dog Friendly</span>
*/}
