import React from "react";
import { useState, useEffect } from "react";

const TestCall = () => {
	// make api call to http://localhost:5000/api/recipes
	// and log the response as json
	// map the json to a list of <li> elements
	// and render the list of <li> elements
	const [data, setData] = useState([]);

	const getData = async () => {
		const response = await fetch("http://localhost:5000/api/recipes");
		const json = await response.json();
		setData(json);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<h1>Test Call</h1>
			<ul>
				{data.map((item) => (
					<li key={item._id}>{item.title}</li>
				))}
			</ul>
		</div>
	);
};

export default TestCall;
