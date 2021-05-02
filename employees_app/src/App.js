import React, {Component} from 'react';
import Header from './components/Header';
import Table from './components/EmployeeTable';
import Search from './components/Search';
import API from './utils/Api.js'

class App extends React.Component{
	state = {
		employees:[], 
		searchedName: ""
	}

	componentDidMount(){
	 	this.getRandomEmployees(); 
	}

	getRandomEmployees = () => {
		API.getEmployees().then(data => {
			let employeeData = [...data.data.results]
			this.setState({employees: employeeData})
			console.log(employeeData)

		})
	}

	handleSort = () => {
		let employeeSorted = [...this.state.employees];
		console.log(employeeSorted);
	}

	handleSubmit = (event) => {
		event.preventDefault();
		let names = this.state.searchedName.split(' ')
		console.log(this.state.employees)
		this.setState({
			employees: this.state.employees.filter(emp => emp.name.first === names[0] &&
		 												 emp.name.last === names[1])
		}) 
		
	}

	handleInputChange = event => {
		let empName = (event.target.value);
		this.setState({searchedName: empName});
		
	}

	render(){
		return (
			<>
				<Header/>
				<Search handleSubmit={this.handleSubmit}
						handleInputChange={this.handleInputChange} />
				<Table data={this.state.employees}/>
			</>
		)
	}
	
}

export default App;