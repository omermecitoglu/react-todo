import React from "react";
import Item from "./item";

const pages = (length, per) => Array(Math.ceil(length/per)).fill();

const Pagination = ({ length, page, per, action }) => (
	<nav aria-label="Page navigation example">
		<ul className="pagination justify-content-center">
			<li className="page-item">
				<a
					className="page-link"
					href="#"
					aria-label="Previous"
					onClick={(e) => action(e, 0)}
				>
					<span aria-hidden="true">&laquo;</span>
				</a>
			</li>
			{pages(length, per).map((p, index) =>
				<Item
					key={index}
					index={index}
					page={page}
					action={action}
				/>
			)}
			<li className="page-item">
				<a
					className="page-link"
					href="#"
					aria-label="Next"
					onClick={(e) => action(e, Math.ceil(length/per)-1)}
				>
					<span aria-hidden="true">&raquo;</span>
				</a>
			</li>
		</ul>
	</nav>
);

export default Pagination;
