import React from 'react'

export default function Button({ text, onClick, disabled, loading }) {
	return (
		<button
			className="btn btn-primary w-sm waves-effect waves-light"
			type="submit"
			onClick={onClick}
			disabled={loading || disabled}
		>
			{loading ? 'Loading..' : text}
		</button>
	)
}
