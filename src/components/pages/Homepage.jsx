import React from "react";
import Navbar from "../Navbar";
import Counter from "../Counter";
import Searchbar from "../Searchbar";

const Homepage = () => {
	return (
		<div>
			<Navbar />
			<Searchbar />
			<Counter />
		</div>
	);
};

export default Homepage;
