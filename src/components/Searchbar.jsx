import React from "react";

const Searchbar = () => {
	return (
		<div className="my-2 flex-centered">
			<div className="input-group input-inline">
				<input className="form-input" type="text" placeholder="search" />
				<button className="btn btn-primary input-group-btn">Search</button>
			</div>
		</div>
	);
};

export default Searchbar;
