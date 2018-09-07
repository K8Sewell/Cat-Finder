import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Cats from './pages/Cats'
import NewCat from './pages/NewCat'
import cats from './components/inputCats.js'
import Home from './pages/Home.js'

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
