import React from 'react'
import { FaRegTrashAlt, FaPen, FaSearch } from 'react-icons/fa'


export default function EachDatabase({ data, index }) {
	return (
		<tr>
			<td>
				<div className="form-check font-size-16">
					<input
						className="form-check-input"
						type="checkbox"
						id="orderidcheck01"
					/>
					<label className="form-check-label" htmlFor="orderidcheck01"></label>
				</div>
			</td>
			<td>
				<a href="javascript: void(0);" className="text-body fw-bold">
					{index + 1}
				</a>{' '}
			</td>
			<td>{data?.datname}</td>
			<td>07 Oct, 2019</td>

			<td>
				<button
					type="button"
					className="btn btn-primary btn-sm btn-rounded"
					data-bs-toggle="modal"
					data-bs-target=".orderdetailsModal"
				>
					Connect
				</button>
			</td>
			<td>
				<div className="d-flex gap-3">
					{/* <a
																	href="javascript:void(0);"
																	className="text-success mr-2"
																>
																	<FaPen className="font-size-18" />
																</a>{' '} */}
					<a href="javascript:void(0);" className="text-danger">
						<FaRegTrashAlt className="font-size-18 ml-3" />
					</a>
				</div>
			</td>
		</tr>
	)
}
