import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home.js'

import Cats from './pages/Cats'
import NewParent from './pages/NewParent'
import cats from './components/inputCats.js'

import Header from './components/Header'
import GetCat from './pages/GetCat'
import { createParent } from './api'

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			parents: [],
			newParentSuccess: false
		}
	}

	handleNewParent(newParentInfo) {
		console.log("New Parent TRY", newParentInfo)
	    createParent(newParentInfo)
	    .then(successParent => {
	        console.log("SUCCESS! Submitted info: ", successParent);
					this.setState({
						newParentSuccess: true
					})
	    })
	}



	render() {
		return (
			<div>
				<Header />
				<Router>
					<Switch>
						<Route exact path="/" render={(props) => <GetCat/>}/>
						<Route exact path="/getcat" render={(props) => <GetCat petinfos = {this.state.petinfos}/>}/>
						<Route exact path="/cats" render={(props) => <Cats cats={this.state.cats}/>} />
						<Route path="/requestcat" render={(props) => <NewParent handleNewParent={this.handleNewParent.bind(this)} />} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;

{/*

	https://www.petfinder.com/developers/api-docs

	The Petfinder API is a RESTful API, which means you access it using standard HTTP request methods. GET is used for reading data, and POST, PUT and DELETE are used for updating data (not supported yet). Arguments are passed in the query string for GET and DELETE, and in the request body for POST and PUT.

	URLs are of the form: http://api.petfinder.com/subsystem.method

	For GET calls, all arguments are specified in the URL query string like this: http://api.petfinder.com/my.method?key=12345&arg1=foo
http://api.petfinder.com/shelter.getPets?key=0ded6543d38411a5b751c2c1aa0f210e&id=CA544

	For POST, PUT and DELETE calls, all arguments should be specified in the request body, so the URL would be http://api.petfinder.com/my.method while the request body would contain key=12345&arg1=foo

	API Key
	0ded6543d38411a5b751c2c1aa0f210e

	API Secret
	1e54777f1b376031a60453d0a9e51258

	*/}
