import react from 'react'; 

function searchBox(props){
	let styles = {
		form: {
			maxWidth: "400px", 
			margin: "10px auto"
		}
	}
	return (
		<form id="searchForm" style={styles.form}>
			<div className="input-group mb-3">
  				<input type="text" className="form-control" placeholder="Employee Name"/>
  				<div className="input-group-append">
    				<button className="btn btn-dark" type="button" OnClick={this.handleSubmit}>Search</button>
  				</div>
			</div>
		</form>
	)
}

export default searchBox;