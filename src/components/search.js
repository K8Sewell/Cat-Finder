import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import GetCat from '../pages/GetCat'
import Cats from '../pages/Cats'
import petfinder from '../api/petfinder3.js'


class Search extends Component {

  constructor(props){
    super(props)
    this.state = {
      searchTerm: "",
      petinfos : petfinder.petfinder.pets.pet
    }
  }


  componentWillMount() {
    // let pets = petfinder.petfinder.pets.pet
    //newPetfinder will hold data grabbed from API
    let newPetInfos = []



    this.state.petinfos.forEach((pet)=>{
      newPetInfos.push(pet)
    })
    this.setState({petinfos: newPetInfos})

  }


  onChange = (e) => {
    console.log(e.target.value)
    let input = e.target.value
    this.setState({searchTerm: input})
  }

  onSubmit = (e) => {
    let { searchTerm } = this.state
    e.preventDefault()
    console.log("form submitted")
    console.log(searchTerm)
    let searchCats = this.state.petinfos.filter(pet =>  (searchTerm === pet.name["$t"]))
        console.log(searchCats)
    return searchCats

  }

	render() {

		return (
      <div>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" onChange={this.onChange} value={this.state.searchTerm} placeholder="Search" />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit" onClick={this.onSubmit}>Search</button>
        </form>
      {/*// <{this.onSubmit} && Redirect to="/foundcats"/>*/}
      </div>
		);
	}
}

export default Search;
