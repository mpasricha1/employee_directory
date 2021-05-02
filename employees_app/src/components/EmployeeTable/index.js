import React from 'react'; 
import EmployeeRow from '../EmployeeRow'

function Table(props){
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope='col'/>
					<th scope='col'>First Name</th>
					<th scope='col'>Last Name</th>
					<th scope='col'>City</th>
					<th scope='col'>State</th>
				</tr>
			</thead>
			<tbody>
				{props.data.map(datum => (
					<EmployeeRow 
						key={datum.login.uuid}
						{...datum} />
				))}
			</tbody>
		</table>
	)
}

export default Table;