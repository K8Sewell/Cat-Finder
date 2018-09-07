import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home.js'

import Cats from './pages/Cats'
import NewCat from './pages/NewCat'
import cats from './components/inputCats.js'

import Header from './components/Header'

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			cats: {cats}
		}
	}

	handleNewCat(cat) {
		console.log(cat)
	}

	render() {
		return (
			<div>
				<Header />
				<Router>
					<Switch>
						<Route exact path="/" render={(props) => <Home/>}/>
						<Route exact path="/cats" render={(props) => <Cats cats={this.state.cats}/>} />
						<Route path="/addcat" render={(props) => <NewCat handleNewCat={this.handleNewCat.bind(this)} />} />
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
