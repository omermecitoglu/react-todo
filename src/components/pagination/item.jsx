import React from "react";

const PaginationItem = ({ index, page, action }) => {
	if(index === page) {
		return (
			<li className="page-item active" aria-current="page">
				<span className="page-link">{index+1}</span>
			</li>
		);
	}
	return (
		<li className="page-item">
			<a
				className="page-link"
				href="#"
				onClick={(e) => action(e, index)}
			>
				{index+1}
			</a>
		</li>
	);
};

export default PaginationItem;
