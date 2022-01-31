import React from 'react'

export default function Login() {
	return (
		<div className="authentication-bg min-vh-100">
			<div className="bg-overlay"></div>
			<div className="container">
				<div className="d-flex flex-column min-vh-100 px-3 pt-4">
					<div className="row justify-content-center my-auto">
						<div className="col-md-8 col-lg-6 col-xl-5">
							<div className="text-center mb-4">
								<a href="index.html">
									<img src="assets/images/logo-sm.svg" alt="" height="22" />{' '}
									<span className="logo-txt">Calfary</span>
								</a>
							</div>

							<div className="card">
								<div className="card-body p-4">
									<div className="text-center mt-2">
										<h5 className="text-primary">Welcome Back !</h5>
										<p className="text-muted">Sign in to continue to Calfary.</p>
									</div>
									<div className="p-2 mt-4">
										<form action="https://themesbrand.com/Calfary/layouts/index.html">
											<div className="mb-3">
												<label className="form-label" for="email">
													Email
												</label>
												<input
													type="text"
													className="form-control"
													id="email"
													placeholder="Enter email address"
												/>
											</div>

											<div className="mb-3">
												<div className="float-end">
													<a href="auth-recoverpw.html" className="text-muted">
														Forgot password?
													</a>
												</div>
												<label className="form-label" for="userpassword">
													Password
												</label>
												<input
													type="password"
													className="form-control"
													id="userpassword"
													placeholder="Enter password"
												/>
											</div>

											<div className="form-check">
												<input
													type="checkbox"
													className="form-check-input"
													id="auth-remember-check"
												/>
												<label
													className="form-check-label"
													for="auth-remember-check"
												>
													Remember me
												</label>
											</div>

											<div className="mt-3 text-end">
												<button
													className="btn btn-primary w-sm waves-effect waves-light"
													type="submit"
												>
													Log In
												</button>
											</div>


											<div className="mt-4 text-center">
												<p className="mb-0">
													Don't have an account ?{' '}
													<a
														href="auth-register.html"
														className="fw-medium text-primary"
													>
														{' '}
														Signup now{' '}
													</a>{' '}
												</p>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-12">
							<div className="text-center text-muted p-4">
								<p className="text-white-50">
									© <span>{new Date().getFullYear()}{' '}</span>
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
