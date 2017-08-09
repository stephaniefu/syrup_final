import React from 'react';
import axios from 'axios';

export default class Match extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			firstname: '',
			age: 25,
			profilepic: ''
		}
	}

	componentDidMount(){
		axios.get(`api/matches/percent/${this.props.match.subject_id}`)
		.then(res => {
			//console.log('This is a response from the db ', res.data.age);
			this.setState({
				firstname: res.data.firstname,
				age: res.data.age,
				profilepic: res.data.profilepic
			})
		})
		.catch(err => {
			console.log(err)
		})
	}

	render(){
		//console.log('This is the props in Match: ', this.props.match);
		return (
			<div className="col-sm-4 text-center match">
				<h2>{this.state.firstname}, {this.state.age}</h2>
				<img src={this.state.profilepic} className="match-pic"/>
				<h3>{Math.round(100 * this.props.match.confidence + 10)}% Match</h3>
				<button className="btn-primary">Connect</button>
			</div>
		);
	}
}