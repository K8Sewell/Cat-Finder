import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import inputCats from './inputCats.js'

class Search extends Component {

  constructor(props){
    super(props)
    this.state = {
      searchTerm: ""
    }
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
    let searchCats = inputCats.filter(cat => (searchTerm == cat.name))
    console.log(searchCats)
    return searchCats
  }

	render() {

		return (
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" onChange={this.onChange} value={this.state.searchTerm} placeholder="Search" />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit" onClick={this.onSubmit}>Search</button>
      </form>
		);
	}
}

export default Search;
