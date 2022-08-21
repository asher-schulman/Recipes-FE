import { useState } from "react";
import Counter from "./components/Counter";
import TestCall from "./components/TestCall";
import "./App.css";

// /api/recipes
// -> return all recipes with a future pagination implementation.

// /api/recipes?ingredients=banana&ingredients=chocolate&title=bread
// -> returns all recipes that have banana and chocolate as ingredients and bread in the title

// /api/recipes/:id
// -> pulls up all information on a specific recipe id

function App() {
	return (
		<div className="App">
			<h1>Recipe App</h1>

			<TestCall />
			<Counter />
		</div>
	);
}

export default App;
