import React, { Component } from 'react'
import Cats from "./Cats.js";
import cats from '../components/inputCats';
import petfinder from '../api/petfinder3.js'
// import DogFriendly from '../components/dogFriendly.js'
import { Card, Header, Body, Title, Text, Badge
} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



class Cat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      petinfos : petfinder.petfinder.pets.pet
    }
  }

//   {/*
// componentDidMount() {
//   fetch("")
//   .then(response => response.json())
//   .then (petinfos => this.setState({ petinfos }));
// }
//     */}

componentWillMount() {
  // let pets = petfinder.petfinder.pets.pet
  //newPetfinder will hold data grabbed from API
  let newPetInfos = []
  console.log(this.state.petinfos)


  this.state.petinfos.forEach((pet)=>{
    newPetInfos.push(pet)
  })
  this.setState({petinfos: newPetInfos})
}

  render() {


    return (
      <div>
      {this.state.petinfos.map((pet)=>{
        let image= "https://cdn.shopify.com/s/files/1/0231/7685/t/3/assets/no-image-available.png?14967611735360811882"
        if (pet.media.photos != undefined) {
        image = pet.media.photos.photo[2]["$t"] }
        let noimage= "https://cdn.shopify.com/s/files/1/0231/7685/t/3/assets/no-image-available.png?14967611735360811882"

        return(
          <div className="card-body">
          <h1>{pet.name["$t"]}</h1>
          <img src= {image} style={{ width: 300}}/>

          <h4>{pet.age["$t"]} • {pet.sex["$t"]}</h4>
          <p> {pet.description["$t"]} </p>
          </div>
        )
      }
    )}

      </div>
    );
  }
}

export default Cat;
