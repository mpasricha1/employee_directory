import React, {Component} from 'react';
import Header from './components/Header';
import Table from './components/EmployeeTable';
import Search from './components/Search';
import API from './utils/Api.js'

class App extends React.Component{
	state = {
		employees:[]
	}

	componentDidMount(){
	 	this.getRandomEmployees(); 
	}

	getRandomEmployees = () => {
		API.getEmployees().then(data => {

			let employeeData = [...data.data.results]
			this.setState({employees: employeeData})

		})
	}

	handleSort = () => {
		let employeeSorted = [...this.state.employees];

		console.log(employeeSorted);
	}

	render(){
		return (
			<>
				<Header/>
				<Search/>
				<Table data={this.state.employees}/>
			</>
		)
	}
	
}

export default App;