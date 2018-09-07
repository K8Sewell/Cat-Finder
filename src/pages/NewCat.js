import React, { Component } from 'react'
import {
	Button,
	Col,
	ControlLabel,
	FormGroup,
	FormControl,
	Row
} from 'react-bootstrap'

class NewCat extends Component {
	constructor(props){
		super(props)
		this.state = {
			form: {
				name: '',
				age: '',
				enjoys: ''
			},
			words: "some words"
		}
	}

	handleChange(event){
		let { form } = this.state
		form[event.target.name] = event.target.value
		this.setState({form: form})
	}

	handleSubmit(){
		let { form } = this.state
		{/*this.props.handleNewCat(form)*/}
		this.setState({words: "some other words"})
	}

	render() {
		return (
			<div style={{paddingLeft: 100}}>
				<form>
					<Row>
						<Col xs={6}>
							<FormGroup>
								<ControlLabel id="name">Name</ControlLabel>
								<FormControl
									type="text"
									name="name"
									value={this.state.form.name}
									onChange={this.handleChange.bind(this)}
								/>
							</FormGroup>
						</Col>
					</Row>

					<Row>
						<Col xs={6}>
							<FormGroup>
								<ControlLabel id="age">Age</ControlLabel>
								<FormControl
									type="number"
									name="age"
									value={this.state.form.age}
									onChange={this.handleChange.bind(this)}
								/>
							</FormGroup>
						</Col>
					</Row>

					<Row>
						<Col xs={6}>
							<FormGroup>
								<ControlLabel id="enjoys">Enjoys</ControlLabel>
								<FormControl
								componentClass='textarea'
								name="enjoys"
								value={this.state.form.enjoys}
								onChange={this.handleChange.bind(this)}
								/>
							</FormGroup>
						</Col>
					</Row>

					<Row>
						<Col xs={6}>
							<Button id="submit" onClick={this.handleSubmit.bind(this)}>
								Create Cat Profile
							</Button>
						</Col>
					</Row>

				</form>
				<p id="wordy">{this.state.words}</p>
			</div>
		);
	}
}

export default NewCat;
