import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
import Sidenav from './Sidenav'

export default function Layout({ children }) {
	const { user } = useSelector((state) => state.auth)

	return (
		<div>
			{user && (
				<>
					<Header />
					<Sidenav />
				</>
			)}
			<div style={{ paddingTop: '60px'}}>
			{children}

			</div>
		</div>
	)
}
