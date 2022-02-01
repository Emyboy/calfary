import React from 'react'

export default function Button({ children, onClick, disabled, loading }) {
	return (
		<button
			className="btn btn-primary w-sm waves-effect waves-light"
			type="submit"
			onClick={onClick}
			disabled={loading || disabled}
		>
			{loading ? 'Loading..' : children}
		</button>
	)
}
