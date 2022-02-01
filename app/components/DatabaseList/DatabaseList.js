import React from 'react'
import { FaSearch } from 'react-icons/fa'
import EachDatabase from './EachDatabase'

export default function DatabaseList({ list }) {
	return (
		<div className="row justify-content-center">
			<div className="col-9">
				<div className="card">
					<div className="card-body">
						<div className="row mb-2">
							<div className="col-sm-4">
								<div className="search-box me-2 mb-2 d-inline-block">
									<div className="position-relative">
										<input
											type="text"
											className="form-control"
											placeholder="Search..."
										/>
										<FaSearch className="mt-3 search-icon" />
									</div>
								</div>
							</div>
							<div className="col-sm-8">
								<div className="text-sm-end">
									<button
										type="button"
										className="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2"
									>
										<i className="mdi mdi-plus me-1"></i> Add Database
									</button>
								</div>
							</div>
						</div>

						<div className="table-responsive">
							<table className="table align-middle table-nowrap table-check">
								<thead className="table-light">
									<tr>
										<th style={{ width: '20px' }} className="align-middle">
											<div className="form-check font-size-16">
												<input
													className="form-check-input"
													type="checkbox"
													id="checkAll"
												/>
												<label
													className="form-check-label"
													htmlFor="checkAll"
												></label>
											</div>
										</th>
										<th className="align-middle">#</th>
										<th className="align-middle">Name</th>
										<th className="align-middle">Last Checked</th>
										<th className="align-middle">_</th>
										<th className="align-middle">Action</th>
									</tr>
								</thead>
								<tbody>
									{list.map((val, i) => {
										return (
											<EachDatabase
												data={val}
												key={`database-${i}`}
												index={i}
											/>
										)
									})}
								</tbody>
							</table>
						</div>
						{/* <ul className="pagination pagination-rounded justify-content-end mb-2">
									<li className="page-item disabled">
										<a
											className="page-link"
											href="javascript: void(0);"
											aria-label="Previous"
										>
											<i className="mdi mdi-chevron-left"></i>
										</a>
									</li>
									<li className="page-item active">
										<a className="page-link" href="javascript: void(0);">
											1
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="javascript: void(0);">
											2
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="javascript: void(0);">
											3
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="javascript: void(0);">
											4
										</a>
									</li>
									<li className="page-item">
										<a className="page-link" href="javascript: void(0);">
											5
										</a>
									</li>
									<li className="page-item">
										<a
											className="page-link"
											href="javascript: void(0);"
											aria-label="Next"
										>
											<i className="mdi mdi-chevron-right"></i>
										</a>
									</li>
								</ul> */}
					</div>
				</div>
			</div>
		</div>
	)
}
