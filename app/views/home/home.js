import axios from 'axios'
import React, { Component } from 'react'
import Api from '../../helpers/api'
import DatabaseList from '../../components/DatabaseList/DatabaseList';
import Global from '../../Global'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = { db_list: [] }
	}

	componentDidMount() {
		// Do something when loaded
		axios(Global.API_URL+`/test`)
			.then((res) => {
				console.log('res', res.data)
				this.setState({ db_list: res.data })
			})
			.catch((err) => console.log('ERROR --', err))
	}

	render() {
		const { db_list } = this.state

		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 mt-3">
						<div className="page-title-box d-flex align-items-center justify-content-between">
							<h4 className="mb-0">Database List</h4>

							<div className="page-title-right">
								<ol className="breadcrumb m-0">
									<li className="breadcrumb-item">
										<a href="javascript: void(0);">Home</a>
									</li>
									<li className="breadcrumb-item active">Settings</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
 
				<DatabaseList list={db_list} />
			</div>
		)
	}
}

export default Home
