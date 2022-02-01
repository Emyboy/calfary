import React from 'react'
import { RiUser3Fill } from 'react-icons/ri'

export default function Header() {
	return (
		<header
			id="page-topbar"
			className="isvertical-topbar"
			style={{ marginTop: '40px' }}
		>
			<div className="navbar-header">
				<div className="d-flex">
					<div className="navbar-brand-box">
						<a href="index.html" className="logo logo-dark">
							<span className="logo-sm">
								<img src="assets/images/logo-sm.svg" alt="" height="22" />
							</span>
							<span className="logo-lg">
								<img src="assets/images/logo-sm.svg" alt="" height="22" />{' '}
								<span className="logo-txt">Calfary</span>
							</span>
						</a>

						<a href="index.html" className="logo logo-light">
							<span className="logo-sm">
								<img src="assets/images/logo-sm.svg" alt="" height="22" />
							</span>
							<span className="logo-lg">
								<img src="assets/images/logo-sm.svg" alt="" height="22" />{' '}
								<span className="logo-txt">Calfary</span>
							</span>
						</a>
					</div>

					{/* <button
						type="button"
						className="btn btn-sm px-3 font-size-16 header-item vertical-menu-btn"
					>
						<i className="fa fa-fw fa-bars"></i>
					</button>

					<form className="app-search d-none d-lg-block">
						<div className="position-relative">
							<input type="text" className="form-control" placeholder="Search..." />
							<span className="bx bx-search"></span>
						</div>
					</form> */}
				</div>

				<div className="d-flex">
					<div className="dropdown d-inline-block d-lg-none">
						<button
							type="button"
							className="btn header-item"
							data-bs-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className="feather feather-search icon-sm"
							>
								<circle cx="11" cy="11" r="8"></circle>
								<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
							</svg>
						</button>
						{/* <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
							<form className="p-2">
								<div className="search-box">
									<div className="position-relative">
										<input
											type="text"
											className="form-control rounded bg-light border-0"
											placeholder="Search..."
										/>
										<i className="mdi mdi-magnify search-icon"></i>
									</div>
								</div>
							</form>
						</div> */}
					</div>

					

					<div className="dropdown d-none d-sm-inline-block">
						<button
							type="button"
							className="btn header-item light-dark"
							id="mode-setting-btn"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className="feather feather-moon icon-sm layout-mode-dark"
							>
								<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className="feather feather-sun icon-sm layout-mode-light"
							>
								<circle cx="12" cy="12" r="5"></circle>
								<line x1="12" y1="1" x2="12" y2="3"></line>
								<line x1="12" y1="21" x2="12" y2="23"></line>
								<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
								<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
								<line x1="1" y1="12" x2="3" y2="12"></line>
								<line x1="21" y1="12" x2="23" y2="12"></line>
								<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
								<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
							</svg>
						</button>
					</div>

					<div className="dropdown d-inline-block">
						<button
							type="button"
							className="btn header-item user text-start d-flex align-items-center"
							id="page-header-user-dropdown"
							data-bs-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							{/* <img
								className="rounded-circle header-profile-user"
								src="assets/images/users/avatar-1.jpg"
								alt="Header Avatar"
							/> */}
							<RiUser3Fill size={25}/>
						</button>
						<div className="dropdown-menu dropdown-menu-end pt-0">
							<a className="dropdown-item" href="contacts-profile.html">
								<i className="bx bx-user-circle text-muted font-size-18 align-middle me-1"></i>{' '}
								<span className="align-middle">My Account</span>
							</a>
							<a className="dropdown-item" href="apps-chat.html">
								<i className="bx bx-chat text-muted font-size-18 align-middle me-1"></i>{' '}
								<span className="align-middle">Chat</span>
							</a>
							<a className="dropdown-item" href="pages-faqs.html">
								<i className="bx bx-buoy text-muted font-size-18 align-middle me-1"></i>{' '}
								<span className="align-middle">Support</span>
							</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item d-flex align-items-center" href="#">
								<i className="bx bx-cog text-muted font-size-18 align-middle me-1"></i>{' '}
								<span className="align-middle me-3">Settings</span>
								<span className="badge badge-soft-success ms-auto">New</span>
							</a>
							<a className="dropdown-item" href="auth-lock-screen.html">
								<i className="bx bx-lock text-muted font-size-18 align-middle me-1"></i>{' '}
								<span className="align-middle">Lock screen</span>
							</a>
							<a className="dropdown-item" href="auth-logout.html">
								<i className="bx bx-log-out text-muted font-size-18 align-middle me-1"></i>{' '}
								<span className="align-middle">Logout</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
