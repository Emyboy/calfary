import React from 'react'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import '../ui_assets/css/bootstrap.min.css'
import '../ui_assets/css/app.min.css'

import Home from '../views/home/home'
import About from '../views/about'
import AppBar from '../components/AppBar/AppBar'
import Login from '../views/auth/login'

const history = createBrowserHistory()

const Routes = (
	<>
		<AppBar />
		<Router history={history}>
			<div id="layout-wrapper">
				<div className=" main-content">
					<div className="page-content" style={{ overflow: 'auto', height: '100vh' }}>
						<Route path="/login" exact component={Login} />
						<Route path="/" exact component={Home} />
						<Route path="about" component={About} />
					</div>
				</div>
			</div>
		</Router>
	</>
)

export default Routes
