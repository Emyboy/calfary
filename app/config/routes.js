'use strict'
import React from 'react'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import '../ui_assets/css/bootstrap.min.css'
import '../ui_assets/css/app.min.css'

import Home from '../views/home/home'
import About from '../views/about'
import AppBar from '../components/AppBar/AppBar'
import Login from '../views/auth/login'
import { Provider } from 'react-redux'
import store from '../redux/store/store'
import Layout from '../components/Layout/Layout'

const history = createBrowserHistory()

const Routes = (
	<Provider store={store}>
		<AppBar />
		<Router history={history}>
			<div id="layout-wrapper">
				<Layout>
					<div className=" main-content">
						<div
							className="page-content"
							style={{ overflow: 'auto', height: '100vh' }}
						>
							<Route path="/home" exact component={Home} />
							<Route path="about" component={About} />
							<Route path="/" exact component={Login} />
						</div>
					</div>
				</Layout>
			</div>
		</Router>
	</Provider>
)

export default Routes
