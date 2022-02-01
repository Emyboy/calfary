import axios from 'axios'
import React, { Component } from 'react'
import Api from '../../helpers/api'
import DatabaseList from '../../components/DatabaseList/DatabaseList'
import Global from '../../Global'
import KnexUtils from '../../utils/Knex.utils'
import {MdOutlineError} from 'react-icons/md'
class Home extends Component {
	constructor(props) {
		super(props)
		this.state = { db_list: [], has_error: false, error_mgs: null }
	}

	componentDidMount() {
		// Do something when loaded
		axios(Global.API_URL + `/test`)
			.then((res) => {
				console.log('res', res)
				this.setState({ db_list: res.data })
			})
			.catch((err) => {
				if (err?.response) {
					this.setState({
						error_mgs: KnexUtils.renderKnexErrorMsg(err?.response?.data),
						has_error: true,
					})
				}
				return Promise.reject(err)
			})
	}

	render() {
		const { db_list, has_error, error_mgs } = this.state;

		return (
			<div className="container-fluid">
				{has_error ? (
					<div className="row justify-content-center">
						<div className="col-lg-4 col-sm-12 col-md-6">
							<div className="card mt-5">
								<div className="card-body text-center">
									<MdOutlineError className='text-danger mb-3' size={80} />
									<h3>{error_mgs}</h3>
									<button className='btn mt-4 btn-danger'>Go Back</button>
								</div>
							</div>
						</div>
					</div>
				) : (
					<>
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
					</>
				)}
			</div>
		)
	}
}

export default Home
