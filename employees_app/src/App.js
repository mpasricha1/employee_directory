import React, {Component} from 'react';
import Header from './components/Header';
import Table from './components/EmployeeTable';
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
			console.log(employeeData)
			this.setState({employees: employeeData})

		})
	}

	render(){
		return (
			<>
				<Header/>
				<Table data={this.state.employees}/>
			</>
		)
	}
	
}

export default App;