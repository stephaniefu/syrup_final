import React from 'react';
import axios from 'axios';
import history from '../history';
import { Redirect } from 'react-router-dom';

export default class Match extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			id: 0,
			firstname: '',
			age: 25,
			profilepic: ''
		}
		this.renderProfile = this.renderProfile.bind(this);
	}

	componentDidMount(){
		axios.get(`api/matches/percent/${this.props.match.subject_id}`)
		.then(res => {
			//console.log('This is a response from the db ', res.data.age);
			this.setState({
				id: res.data.id,
				firstname: res.data.firstname,
				age: res.data.age,
				profilepic: res.data.profilepic
			})
		})
		.catch(err => {
			console.log(err)
		})
	}

	renderProfile(){
		console.log('This is rendering');
		// return (
		// 	<Redirect push to="/profile/this.state.id"/>
		// );
		history.push(`/profile/${this.state.id}`);
		// axios.get(`api/profile/get/${this.state.id}`)
		// 	.then(res => {
		// 		console.log(res);
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 	})

	}

	render(){
		console.log('This is the props in Match: ', this.props);
		return (
            <div className="col-sm-4 text-center match" onClick={this.renderProfile}>
                <h2>{this.state.firstname}, {this.state.age}</h2>
                <a href={`/${this.state.id}`}><img src={this.state.profilepic} className="match-pic"/></a>
                <h3>{Math.round(100 * this.props.match.confidence + 10)}% Match</h3>
                <button className="btn-primary">Connect</button>
            </div>
        );
	}
}
