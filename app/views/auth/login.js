import axios from 'axios'
import React, { useState } from 'react'
import { RiUser6Fill } from 'react-icons/ri'
import Global from '../../Global'
import Button from '../../components/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default function Login() {
	const [name, setName] = useState('_')
	const [password, setPassword] = useState(null)
	const [loading, setLoading] = useState(false);
	const { user } = useSelector(state => state.auth);

	const dispatch = useDispatch()

	function onSubmit(e) {
		setLoading(true)
		axios(Global.API_URL + '/auth/app', {
			method: 'POST',
			data: {
				name,
				password,
			},
		})
			.then((res) => {
				setLoading(false)
				console.log('RES --', res.data)
				dispatch({
					type: 'SET_AUTH_STATE',
					payload: {
						user: res.data
					}
				})
			})
			.catch((err) => {
				setLoading(false)
				console.lot('ERROR --', err)
			})
	}

	if(user){
		return <Redirect to='/home' />
	}

	return (
		<div className="authentication-bg min-vh-100">
			<div className="bg-overlay"></div>
			<div className="container">
				<div className="d-flex flex-column min-vh-100 px-3">
					<div className="row justify-content-center my-auto">
						<div className="col-md-8 col-lg-6 col-xl-5">
							<div className="text-center mb-4">
								<a>
									<img src="assets/images/logo-sm.svg" alt="" height="22" />{' '}
									<span className="logo-txt">Calfary</span>
								</a>
							</div>

							<div className="card">
								<div className="card-body p-4">
									<div className="text-center mt-2">
										<h5 className="text-primary">New User</h5>
										<p className="text-muted">
											Enter name and password for authentication
										</p>
									</div>
									<div className="p-2 mt-4">
										<div className="user-thumb text-center mb-4">
											{/* <img
												src="assets/images/users/avatar-4.jpg"
												className="rounded-circle img-thumbnail avatar-lg"
												alt="thumbnail"
											/> */}
											<RiUser6Fill size={50} />
											<h5 className="font-size-15 mt-3">{name}</h5>
										</div>
										<div onSubmit={onSubmit}>
											<div className="mb-3">
												<label className="form-label" htmlFor="userpassword">
													Name
												</label>
												<input
													autoFocus
													type="text"
													maxLength={15}
													className="form-control"
													id="userpassword"
													placeholder="Enter Your Name"
													onChange={(e) => setName(e.target.value)}
												/>
											</div>
											<div className="mb-3">
												<label className="form-label" htmlFor="userpassword">
													Password
												</label>
												<input
													type="password"
													className="form-control"
													id="userpassword"
													placeholder="Enter password"
													onChange={(e) => setPassword(e.target.value)}
												/>
											</div>

											<div className="mt-3 text-end">
												<Button
													onClick={() => onSubmit()}
													text={'Create'}
													loading={loading}
													disabled={!name || !password}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-12">
							<div className="text-center text-muted p-4">
								<p className="text-white-50">
									© <span>{new Date().getFullYear()} </span>
									Calfary. Crafted by{' '}
									<i className="mdi mdi-heart text-danger"></i> by iDegin
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
