import React from "react";
import Navbar from "../Navbar";
import Counter from "../Counter";
import Searchbar from "../Searchbar";

const Homepage = () => {
	return (
		<div className="m-2 p-2">
			<Navbar />
			<Searchbar />
			<Counter />
		</div>
	);
};

export default Homepage;
