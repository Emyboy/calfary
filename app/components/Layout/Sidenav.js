import React from 'react'
import { RiDatabase2Fill } from 'react-icons/ri'

export default function Sidenav() {
	return (
		<div className="vertical-menu" style={{ display: 'block' }}>
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
					<span className="logo-lg">
						<img src="assets/images/logo-sm.svg" alt="" height="22" />{' '}
						<span className="logo-txt">Calfary</span>
					</span>
					<span className="logo-sm">
						<img src="assets/images/logo-sm.svg" alt="" height="22" />
					</span>
				</a>
			</div>

			<button
				type="button"
				className="btn btn-sm px-3 font-size-16 header-item vertical-menu-btn"
			>
				<i className="fa fa-fw fa-bars"></i>
			</button>

			<div data-simplebar="init" className="sidebar-menu-scroll">
				<div className="simplebar-wrapper" style={{ margin: '0px' }}>
					<div className="simplebar-height-auto-observer-wrapper">
						<div className="simplebar-height-auto-observer"></div>
					</div>
					<div className="simplebar-mask">
						<div
							className="simplebar-offset"
							style={{ right: '-17px', bottom: '0px' }}
						>
							<div
								className="simplebar-content-wrapper"
								style={{ height: '100%', overflow: 'hidden scroll' }}
							>
								<div className="simplebar-content" style={{ padding: '0px' }}>
									<div id="sidebar-menu">
										<ul className="metismenu list-unstyled" id="side-menu">
											<li className="menu-title" data-key="t-menu">
												Tables
											</li>

											<li>
												<a href="index.html">
													<RiDatabase2Fill className="bx bx-tachometer icon nav-icon" />

													<span className="menu-item" data-key="t-dashboards">
														Dashboard
													</span>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="simplebar-placeholder"
						// style="width: auto; height: 960px;"
					></div>
				</div>
				<div
					className="simplebar-track simplebar-horizontal"
					// style="visibility: hidden;"
				>
					<div
						className="simplebar-scrollbar"
						// style="transform: translate3d(0px, 0px, 0px); display: none;"
					></div>
				</div>
				<div
					className="simplebar-track simplebar-vertical"
					// style="visibility: visible;"
				>
					<div
						className="simplebar-scrollbar"
						// style="height: 768px; transform: translate3d(0px, 91px, 0px); display: block;"
					></div>
				</div>
			</div>
		</div>
	)
}
