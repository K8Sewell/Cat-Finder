import React, { Component } from 'react'
import {
	Button,
	Col,
	ControlLabel,
	FormGroup,
	FormControl,
	Row,
	Alert
} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

class NewCat extends Component {
	constructor(props){
		super(props)
		this.state = {
			parent: {
				name: '',
				petname: '',
				email: '',
				phone: '',
				interest: '',
			},
		}
	}

	handleChange(event){
		let { parent } = this.state
		parent[event.target.name] = event.target.value
		this.setState({parent: parent})
	}

	handleSubmit(){
		this.props.handleNewParent(this.state)
	}

	render() {
		return (
			<div style={{paddingLeft: 100}}>
				<form>
					<Row>
						<Col xs={6}>
						<h2>Interested In Adopting A New Friend?</h2>
							<FormGroup>
								<ControlLabel id="petname">Pet of Interest:</ControlLabel>
								<FormControl
									type="text"
									name="petname"
									value={this.state.parent.petname}
									onChange={this.handleChange.bind(this)}
								/>
							</FormGroup>
						</Col>
					</Row>

					<Row>
						<Col xs={6}>
						<h3>Adopter Information</h3>
						<FormGroup>
							<ControlLabel id="name">Name:</ControlLabel>
							<FormControl
								type="text"
								name="name"
								value={this.state.parent.name}
								onChange={this.handleChange.bind(this)}
							/>
						</FormGroup>
							<FormGroup>
								<ControlLabel id="email">Email:</ControlLabel>
								<FormControl
									type="email"
									name="email"
									value={this.state.parent.email}
									onChange={this.handleChange.bind(this)}
								/>
							</FormGroup>
						</Col>
					</Row>

					<Row>
						<Col xs={6}>
							<FormGroup>
								<ControlLabel id="phone">Phone:</ControlLabel>
								<FormControl
								type='text'
								name="phone"
								value={this.state.parent.phone}
								onChange={this.handleChange.bind(this)}
								/>
							</FormGroup>
						</Col>
					</Row>


					<Row>
						<Col xs={6}>
							<FormGroup>
								<ControlLabel id="interest">Interest:</ControlLabel>
								<FormControl
								componentClass='textarea'
								name="interest"
								value={this.state.parent.interest}
								onChange={this.handleChange.bind(this)}
								/>
							</FormGroup>
						</Col>
					</Row>

					<Row>
						<Col xs={6}>
							<Button id="submit" onClick={this.handleSubmit.bind(this)}>
								Submit
							</Button>
						</Col>
					</Row>

				</form>
				{this.props.success &&
					<Redirect to="/GetCat" />
				}
				<div className="alert alert-dismissible alert-success">
				  <button type="button" className="close" data-dismiss="alert">&times;</button>
				  <strong>Well done!</strong> You successfully read <a href="#" className="alert-link">this important alert message</a>.
				</div>
			</div>
		);
	}
}

export default NewCat;

// if valid(params[:name], params[:petname], params[:email], params[:phone], params[:interest]) flash.now [:alert] = "Your Cat Request was Submitted!"
