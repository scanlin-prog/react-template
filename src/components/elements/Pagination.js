import React from 'react';
import '../../assets/css/elements/Pagination.css';

function Pagination() {
	return (
		<div className="pagination">
			<button className="pagination__button pagination__button-prev pagination__button_disabled">Prev</button>
			<div className="pagination__page">
				<p className="pagination__page-number">1</p>
			</div>
			<div className="pagination__page">
				<p className="pagination__page-number">2</p>
			</div>
			<div className="pagination__page">
				<p className="pagination__page-number">3</p>
			</div>
			<div className="pagination__page">
				<p className="pagination__page-number pagination__page-number_disabled">...</p>
			</div>
			<div className="pagination__page">
				<p className="pagination__page-number">12</p>
			</div>
			<button className="pagination__button pagination__button-next">Next</button>
		</div>
	)
}

export default Pagination;