import React from "react";
import Navbar from "../Navbar";
import Counter from "../Counter";
import Searchbar from "../Searchbar";
import APITestCall from "../APITestCall";
import Footer from "../Footer";

const Homepage = () => {
	return (
		<div className="m-2 p-2">
			<Navbar />
			<Searchbar />
			<Counter />
			<APITestCall />
			<Footer />
		</div>
	);
};

export default Homepage;
